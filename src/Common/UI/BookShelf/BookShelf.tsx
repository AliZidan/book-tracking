import Book from '../Book/Book';
import { Book as BookInterface } from '../../Models/Book.interface';
import classes from './BookShelf.module.css';

const BookShelf = (props: {
  shelfName: string,
  books: BookInterface[]
}) => {

  return (
    <div className={classes.bookshelf}>
      <h2 className={classes["bookshelf-title"]}>{props.shelfName}</h2>
      <div className={classes["bookshelf-books"]}>
        <ol className={classes["books-grid"]}>

          {
            props.books.map((book: BookInterface) => {
              return <Book key={book.id} book={book} />
            })
          }
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
