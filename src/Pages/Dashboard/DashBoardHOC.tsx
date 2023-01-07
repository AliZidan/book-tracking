import { useState, useEffect } from 'react';
import { fetchBooks } from '../../Store/BookActions';
import { useSelector, useDispatch } from 'react-redux';
const DashBoardHOC = (props: {
    DashBoard: any
}) => {
    const dispatch = useDispatch();
    const allBooksPerShelf: any = useSelector((state: any) => state.books.allBooksPerShelf);

    useEffect(() => {
  console.log('dispatching');
      dispatch(fetchBooks() as any);
    }, [dispatch]);

  return (
    <>
    <props.DashBoard booksPerShelf={allBooksPerShelf} />
    </>
  )
};

export default DashBoardHOC;
