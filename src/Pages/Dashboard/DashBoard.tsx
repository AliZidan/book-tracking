import { FC } from 'react';
import { BooksPerShelf } from '../../Common/Models/BooksPerShelf.interface';
import BookShelf from '../../Common/UI/BookShelf/BookShelf';
import Spinner from '../../Common/UI/Spinner/Spinner';
import classes from './DashBoard.module.css';
import { Link } from "react-router-dom";
const DashBoard: FC<{
  booksPerShelf: BooksPerShelf
}> = (props: {
  booksPerShelf: BooksPerShelf,
}) => {

  return (
    <>
      <div className={classes["list-books-title"]}>
        <h1>MyReads</h1>
        <Link className={classes["link"]} to="/">OverView Page</Link>
        <Link className={`${classes["link"]} ${classes["serach-link"]}`} to="/search">Serach Page</Link>
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
