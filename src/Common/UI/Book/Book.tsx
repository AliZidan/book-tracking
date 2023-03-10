import { Book as BookInterface } from '../../Models/Book.interface';
import DropDown from '../DropDown/DropDown';
import DropDownHOC from '../DropDown/DropDownHOC';
import classes from './Book.module.css';
import React from 'react';

const Book = (props: {
  book: BookInterface
}) => {

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
        <DropDownHOC DropDown={DropDown} bookId={props.book.id} currentShelf={props.book.shelf}/>
      </div>
      <div className={classes["book-title"]}>{props.book['title']}</div>
      <div className={classes["book-authors"]}>{props.book['authors'].join(',')}</div>
    </div>
  </li>
  );
};

export default Book;
