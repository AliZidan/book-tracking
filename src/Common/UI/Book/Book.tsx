import { Book as BookInterace } from '../../Models/Book.interface';
import DropDown from '../DropDown/DropDown';
import classes from './Book.module.css';

const Book = (props: {
  book: BookInterace
}) => {

    // TODO: HOC for book
      // const changeShelf = (book: any) => {

    //   const currentShelf: 'currentlyReading' | 'wantToRead' | 'read' = action.payload.currentShelf;

    //   const newShelf: 'currentlyReading' | 'wantToRead' | 'read' = action.payload.newShelf;

    //   const bookIndex = state.booksPerShelf[currentShelf].findIndex((book: Book) => book.id === action.payload.bookId);

    //   const newBook: Book = {
    //     ... state.booksPerShelf[currentShelf][bookIndex],
    //     shelf: newShelf
    //   } 

    // }

  return (
    <li>
    <div className={classes["book"]}>
      <div className={classes["book-top"]}>
        <div
          className={classes["book-cover"]}
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${props.book['image']})`,
          }}
        ></div>
        <DropDown bookId={props.book.id} currentShelf={props.book.shelf}/>
      </div>
      <div className={classes["book-title"]}>{props.book['title']}</div>
      <div className={classes["book-authors"]}>{props.book['authors'].join(',')}</div>
    </div>
  </li>
  );
};

export default Book;
