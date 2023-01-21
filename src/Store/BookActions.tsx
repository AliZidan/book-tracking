import { bookActions } from './BookSlice';
import { getAllBooks, searchForBooks, update} from '../Common/Services/BookService';

export const fetchBooks = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await getAllBooks();
      return response;
    };

    try {
      const booksPerShelf = await fetchData();
      dispatch(
        bookActions.setBooks({
          allBooksPerShelf: booksPerShelf || [],
        })
      );
    } catch (error) {
    // alert('Searching books failed');
    }
  };
};

export const searchBooks = (query: string) => {

  return async (dispatch: any) => {
    const searchForABook = async () => {
      const response = await searchForBooks(query, 10);
      return response;
    };

    try {
      const booksForQuery = await searchForABook();

      dispatch(
        bookActions.searchForBooks({
          booksForQuery: booksForQuery || [],
        })
      );
    } catch (error) {
    // alert('Loading books failed');
    }
  };
};


export const updateBook = (bookId: string, newShelf: string, currentShelf: string) => {
  return async (dispatch: any) => {
    const updateABook = async () => {
      const response = await update(bookId, newShelf);
      return response;
    };

    try {
      await updateABook();
      dispatch(
        bookActions.changeShelf({
          bookId: bookId,
          newShelf: newShelf,
          currentShelf: currentShelf
        } as any)
      );
    } catch (error) {
    // alert('Updating book failed');
    }
  };
};