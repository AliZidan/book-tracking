import { useContext } from 'react';
import { Book as BookInterface } from '../../Common/Models/Book.interface';
import Book from '../../Common/UI/Book/Book';
import BookShelf from '../../Common/UI/BookShelf/BookShelf';

import classes from './Search.module.css';

const Search = (props: {
  changeFilterValue: any,
  books: BookInterface[]
}) => {

  // console.log(props.books)
  return (
    <>
      <div>
        <div className={classes["search-books-bar"]}>
          <a
             className={classes["close-search"]}
          >
            Close
          </a>
          <div className={classes["search-books-input-wrapper"]}>
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
               onChange={props.changeFilterValue}
            />
          </div>
        </div>
        <div className={classes["search-books-results"]}>
          <ol className={classes["books-grid"]}>
            {
              props.books.map((book: BookInterface) => {
                return <Book key={book.id} book={book} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
};

export default Search;
