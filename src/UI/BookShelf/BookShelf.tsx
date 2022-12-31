import { useContext } from 'react';
import Book from '../Book/Book';

import classes from './BooksList.module.css';

const BookShelf = (props:{
    shelfName: string
}) => {


  return (
    <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelfName}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                   <Book/>
                  </ol>
                </div>
              </div>
  );
};

export default BookShelf;
