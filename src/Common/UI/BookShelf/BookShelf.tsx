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
            (Array.isArray(props.books) && props.books.length) ? (props.books.map((book: BookInterface) => {
              return <Book key={book.id} book={book} />
            })) : (<h1 style={{color: '#2e7c31'}}> No Books For This Shelf</h1>)
          }
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
