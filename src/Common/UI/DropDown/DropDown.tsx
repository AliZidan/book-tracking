import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './DropDown.module.css';
import { bookActions } from '../../../Store/BookSlice';

const DropDown = (props: {
  currentShelf: string,
  bookId: string,
}) => {

    const dispatch = useDispatch();

    const shelfs = [{
        text: 'Currently Reading',
        value: 'currentlyReading'
    },
    {
        text: 'Want to Read',
        value: 'wantToRead'
    },
    {
        text: 'Read',
        value: 'read'
    }];

    const handleChange = (event: any) => {
        const newShelf: 'currentlyReading' | 'wantToRead' | 'read' = event.target.value;

        dispatch(bookActions.changeShelf({
            bookId: props.bookId,
            currentShelf: props.currentShelf,
            newShelf: newShelf,
        } as any));
    };

  return (
    <div className={classes["book-shelf-changer"]}>
    <select  value={props.currentShelf} onChange={handleChange} >
      <option value="none" disabled>
        Move to...
      </option>
      {
        shelfs.map((shelf) => {
            return <option key={shelf.value} value={shelf.value}>
            {shelf.text}
          </option>
        })
      }
    </select>
  </div>
  );
};

export default DropDown;
