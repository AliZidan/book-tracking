import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../../../Store/BookActions';
import React from 'react';

const DropDownHOC = (props: {
    DropDown: FC<{
        bookId: string;
        currentShelf: 'currentlyReading' | 'wantToRead' | 'read' | 'none';
        handleShelfChange: React.ChangeEventHandler<HTMLSelectElement>;
    }>;
    bookId: string;
    currentShelf: any;
}) => {
    const dispatch = useDispatch();

    const handleShelfChange = (event: any) => {

        const newShelf: 'currentlyReading' | 'wantToRead' | 'read' | 'none' = event.target.value;

        const currentShelf: 'currentlyReading' | 'wantToRead' | 'read' | 'none' = props.currentShelf;

         dispatch(updateBook(props.bookId, newShelf, currentShelf) as any);
    }; 

    return (
        <>
            <props.DropDown bookId={props.bookId} currentShelf={props.currentShelf} handleShelfChange={handleShelfChange} />
        </>
    )
};

export default DropDownHOC;
