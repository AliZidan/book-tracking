import { useState, useEffect } from 'react';
import { fetchBooks } from '../../Store/BookActions';
import { useSelector, useDispatch } from 'react-redux';
import { Book } from '../../Common/Models/Book.interface';

const SearchHOC = (props: {
    Search: any
}) => {

    let allBooks: Book[] = [];

    const [currentFilteredBooks, setCurrentFilteredBooks ] = useState<Book[]>([]);

    const [filterValue, setFilterValue ] = useState<string>('');

    const dispatch = useDispatch();

    const allBooksPerShelf = useSelector((state: any) => state.books.allBooksPerShelf);

    // const filteredBooks = useSelector((state: any) => state.books.filteredBooks);

    const filterBookBy = (book: Book, property: 'title' | 'authors' | 'industryIdentifiers') => {

        if (typeof book[property] === 'string') {

            return (book[property] as string).toLowerCase().includes(filterValue);
        } else if (Array.isArray(book[property])){

           return !!(book[property] as Array<string>)
           .map((value: string) => value.toLowerCase())
           .filter((value: string) => value.includes(filterValue)).length;
        }

        return false;
    };

    const changeFilterValue = (event: any) =>{
        const userInput = event.target.value ? event.target.value.trim().toLowerCase() : '';

        setFilterValue(userInput);

        filterBooks();
    };

    const filterBooks = () => {

        if (filterValue && allBooksPerShelf) {

            // const allBooks: Book[] = [...allBooksPerShelf['currentlyReading'], ...allBooksPerShelf['wantToRead'], ...allBooksPerShelf['read']];

            let filteredBooks: Book[] = allBooks.filter((book: Book) => {
                return filterBookBy(book, 'title') || 
                 filterBookBy(book, 'authors') ||
                 filterBookBy(book, 'industryIdentifiers');
            });

            // dispatch(setFilteredBooks(filteredBooks) as any);
            setCurrentFilteredBooks(filteredBooks);
        } else {

            setCurrentFilteredBooks([]);
        }
    }

    const sortBooks = (book1: Book, book2: Book) => {
        if (book1.id < book2.id) {
            return -1;
        }
        if (book1.id > book2.id) {
            return 1;
        }
        return 0;
    };

    useEffect(() => {
        if (allBooksPerShelf) {

            allBooks = [...allBooksPerShelf['currentlyReading'], ...allBooksPerShelf['wantToRead'], ...allBooksPerShelf['read']];

              allBooks.sort(sortBooks);

            if (filterValue) {
    
                filterBooks();
            }
        }
    }, [filterValue, allBooksPerShelf]);

    useEffect(() => {
        // console.log('dispatching');
        dispatch(fetchBooks() as any);
    }, [dispatch]);

    return (
        <>
            <props.Search changeFilterValue={changeFilterValue} books={currentFilteredBooks} />
        </>
    )
};

export default SearchHOC;
