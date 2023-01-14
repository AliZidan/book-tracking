import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../Common/Models/Book.interface';
import { BooksPerShelf } from '../Common/Models/BooksPerShelf.interface';

export interface State {
  allBooksPerShelf: BooksPerShelf | null,
  shelfChanges: Object | null,
  booksForQuery: Book[] | null
}

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    allBooksPerShelf: null,
    shelfChanges: null,
    booksForQuery: null
  },
  reducers: {
    setBooks(state: State, action) {

      state.allBooksPerShelf = action.payload.allBooksPerShelf;
    },
    searchForBooks(state: State, action) {

      if (Array.isArray(action.payload.booksForQuery) && action.payload.booksForQuery.length) {

        const booksIdsPerIndex: {
          [bookId: string]: number
        } = action.payload.booksForQuery.reduce((a:{[bookId: string]: number}, book: Book, currentIndex: number) => 
        ({ ...a, [book.id]: currentIndex}), {});
  
        if(state.allBooksPerShelf) {
  
          for(const shelf in state.allBooksPerShelf) {
  
            const booksInShelf: Book[] = state.allBooksPerShelf[shelf as 'currentlyReading' | 'wantToRead' | 'read'];
  
            for (const book of booksInShelf) {
  
              if (typeof booksIdsPerIndex[(book as Book).id] !== 'undefined') {
  
                action.payload.booksForQuery[booksIdsPerIndex[(book as Book).id]].shelf = book.shelf;
              }
            }
          }
        }
      }

      state.booksForQuery = action.payload.booksForQuery;
    },
    changeShelf(state: State, action: any) {

      const currentShelf: 'currentlyReading' | 'wantToRead' | 'read' | 'none' = action.payload.currentShelf;

      const newShelf: 'currentlyReading' | 'wantToRead' | 'read' | 'none' = action.payload.newShelf;

      if (state.allBooksPerShelf) {

        if (currentShelf !== 'none' && state.allBooksPerShelf[currentShelf]) {

          let bookIndexInOverview: number  = state.allBooksPerShelf[currentShelf].findIndex((book: Book) => book.id === action.payload.bookId);

            const modifiedBook: Book = {
              ...state.allBooksPerShelf[currentShelf][bookIndexInOverview],
              shelf: newShelf
            };

            state.allBooksPerShelf[currentShelf].splice(bookIndexInOverview, 1);
  
            if (newShelf !== 'none') {

              state.allBooksPerShelf[newShelf].push(modifiedBook);
          }
        }
      }

      if (Array.isArray(state.booksForQuery)) {

        let bookIndexInSearch: number = state.booksForQuery.findIndex((book: Book) => book.id === action.payload.bookId);

        if (bookIndexInSearch >= 0) {

          const modifiedBook: Book = {
            ...state.booksForQuery[bookIndexInSearch],
            shelf: newShelf
          }
  
          state.booksForQuery[bookIndexInSearch] = modifiedBook;

          if(currentShelf === 'none' && newShelf !== 'none' && state.allBooksPerShelf) {

            state.allBooksPerShelf[newShelf].push(state.booksForQuery[bookIndexInSearch]);
          }
        }
      }
    }
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
