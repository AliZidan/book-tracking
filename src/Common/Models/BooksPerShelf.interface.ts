import { Book } from "./Book.interface";

export interface BooksPerShelf {
    currentlyReading: Book[],
    wantToRead: Book[],
    read: Book[] 
}
