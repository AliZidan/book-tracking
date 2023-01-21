import { useState, useEffect, useRef, FC } from 'react';
import { fetchBooks, searchBooks } from '../../Store/BookActions';
import { useSelector, useDispatch } from 'react-redux';
import { bookActions } from '../../Store/BookSlice';
import { Book } from '../../Common/Models/Book.interface';
import { BooksPerShelf } from '../../Common/Models/BooksPerShelf.interface';
import React from 'react';

const SearchHOC = (props: {
    Search: FC<{
        isLoading: boolean,
        changeFilterValue: React.ChangeEventHandler<HTMLInputElement>;
        books: Book[] | null
    }>
}) => {

    const [searching, setSearchingFlag] = useState<boolean>(false);

    const [searchValue, setSearchValue] = useState<string>('');

    const dispatch = useDispatch();

    let timeout: {
        current: NodeJS.Timeout | undefined
    } = useRef();

    const booksForQuery = useSelector((state: any) => state.books.booksForQuery);

    const allBooksPerShelf: BooksPerShelf = useSelector((state: any) => state.books.allBooksPerShelf);

    const changeFilterValue = (event: any) => {

        setSearchingFlag(true);

        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {

            const userInput = event.target.value ? event.target.value.trim().toLowerCase() : '';

            if (searchValue !== userInput) {

                setSearchValue(userInput);

                if (userInput) {

                    dispatch(searchBooks(userInput) as any);
                } else {

                    dispatch(bookActions.searchForBooks({
                        booksForQuery: null,
                    }));
                }
            } else {
                setSearchingFlag(false);
            }
        }, 500);
    };

    useEffect(() => {
        if (!allBooksPerShelf) {
            dispatch(fetchBooks() as any);
        }
    }, [dispatch, allBooksPerShelf]);

    useEffect(() => {
          setSearchingFlag(false);
    }, [booksForQuery]);

    return (
        <>
            {
                <props.Search isLoading={!allBooksPerShelf || !searching} changeFilterValue={changeFilterValue}
                    books={booksForQuery} />
            }
        </>
    )
};

export default SearchHOC;
