import { Book } from "../Models/Book.interface";
import { BooksPerShelf } from "../Models/BooksPerShelf.interface";
// import API_URLS from '../../Common/API_URLS';
const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getBookDetails = (bookId: string) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getAllBooks = () =>
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books)
    .then((booksResponse: any) => {
        const booksPerShelf: BooksPerShelf = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        };
        for (const book of booksResponse) {
            const shelf: 'currentlyReading' | 'wantToRead' | 'read' = book.shelf;
            booksPerShelf[shelf].push({
                id: book.id,
                title: book.title,
                subtitle: book.subtitle,
                authors: book.authors,
                image: book.imageLinks.thumbnail,
                shelf,
                industryIdentifiers: book.industryIdentifiers?.map((industryIdentifier: {type: string, identifier: string}) => industryIdentifier.identifier)
            });
        }

        return booksPerShelf;
    });

export const update = (book: Book, shelf: any) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query: string, maxResults: number) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);
