import { useContext } from 'react';
import BookShelf from '../../UI/BookShelf/BookShelf';

import classes from './BooksList.module.css';

const DashBoard = (props: {
}) => {


  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf shelfName="Currently Reading"/>
        <BookShelf shelfName="Want To Read"/>
        <BookShelf shelfName="Read"/>
      </div>
    </div>
  );
};

export default DashBoard;
