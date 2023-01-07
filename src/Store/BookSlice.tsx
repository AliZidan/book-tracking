import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../Common/Models/Book.interface';
import { BooksPerShelf } from '../Common/Models/BooksPerShelf.interface';

interface State {
  allBooksPerShelf: BooksPerShelf | null,
  // filteredBooks: BooksPerShelf | null,
}

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    allBooksPerShelf: null,
    // filteredBooks: null
  },
  reducers: {
    setBooks(state: State, action) {
      state.allBooksPerShelf = action.payload.allBooksPerShelf;
      // state.filteredBooks = action.payload.allBooksPerShelf;
    },
    changeShelf(state: State, action: any) {

      if (state.allBooksPerShelf) {
        const currentShelf: 'currentlyReading' | 'wantToRead' | 'read' = action.payload.currentShelf;

        const newShelf: 'currentlyReading' | 'wantToRead' | 'read' = action.payload.newShelf;

        const bookIndex = state.allBooksPerShelf[currentShelf].findIndex((book: Book) => book.id === action.payload.bookId);

        const newBook: Book = {
          ... state.allBooksPerShelf[currentShelf][bookIndex],
          shelf: newShelf
        } 

        state.allBooksPerShelf[currentShelf].splice(bookIndex, 1);

        state.allBooksPerShelf[newShelf].push(newBook);
      }
    },
    // setFilterBooks(state, action) {
    //   state.filteredBooks = action.payload.filteredBooks;
    // }
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
