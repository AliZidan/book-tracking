import { bookActions } from './BookSlice';
import { getAllBooks } from '../Common/Services/BookService';
import { Book } from '../Common/Models/Book.interface';

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
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Fetching cart data failed!',
    //     })
    //   );
    // alert('Loading books failed');
    }
  };
};

// export const setFilteredBooks = (filteredBooks: Book[]) => {
//   return (dispatch: any) => {
//     dispatch(
//       bookActions.setBooks({
//         shownBooks: filteredBooks || [],
//       })
//     );
//   };
// };