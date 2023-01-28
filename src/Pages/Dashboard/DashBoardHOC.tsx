import React from "react";
import { FC, useEffect } from 'react';
import { fetchBooks } from '../../Store/BookActions';
import { useSelector, useDispatch } from 'react-redux';
import { bookActions } from '../../Store/BookSlice';
import { BooksPerShelf } from '../../Common/Models/BooksPerShelf.interface';

const DashBoardHOC = (props: {
    DashBoard: FC<{
      booksPerShelf: BooksPerShelf
    }>
}) => {
    const dispatch = useDispatch();

    const allBooksPerShelf: BooksPerShelf = useSelector((state: any) => state.books.allBooksPerShelf);

    useEffect(() => {
      dispatch(bookActions.searchForBooks({
        booksForQuery: null,
      }));
    }, [dispatch]);

    useEffect(() => {
      if (!allBooksPerShelf) {
        dispatch(fetchBooks() as any);
      }
    },[dispatch, allBooksPerShelf]);

  return (
    <>
    <props.DashBoard booksPerShelf={allBooksPerShelf} />
    </>
  )
};

export default DashBoardHOC;
