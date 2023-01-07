import { BooksPerShelf } from '../../Common/Models/BooksPerShelf.interface';
import BookShelf from '../../Common/UI/BookShelf/BookShelf';
import Spinner from '../../Common/UI/Spinner/Spinner';
import classes from './DashBoard.module.css';

const DashBoard = (props: {
  booksPerShelf: BooksPerShelf,
}) => {

  return (
    <>
      <div className={classes["list-books-title"]}>
        <h1>MyReads</h1>
      </div>

      {
        props.booksPerShelf ?
        <div className={classes["list-books-content"]}>
        <BookShelf shelfName="Currently Reading" books={props.booksPerShelf['currentlyReading']} />
        <BookShelf shelfName="Want To Read" books={props.booksPerShelf['wantToRead']} />
        <BookShelf shelfName="Read" books={props.booksPerShelf['read']} />
      </div> :  <Spinner/>
      }
       
    </>
  );
};

export default DashBoard;
