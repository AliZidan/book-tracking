import { Book } from "../Models/Book.interface";
import { BooksPerShelf } from "../Models/BooksPerShelf.interface";
import * as APIS from "../Constants/API_URLS";

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getAllBooks: () => Promise<BooksPerShelf> = () =>
  fetch(`${api}/${APIS.default.GET_ALL_BOOKS.url}`, { headers })
    .then((res) => res.json())
    .then((res) => res.books)
    .then((booksResponse: any) => {
      const booksPerShelf: BooksPerShelf = {
        currentlyReading: [],
        wantToRead: [],
        read: []
      };
      for (const book of booksResponse) {
        const shelf: 'currentlyReading' | 'wantToRead' | 'read'= book.shelf;
        booksPerShelf[shelf].push({
          id: book.id,
          title: book.title,
          subtitle: book.subtitle,
          authors: book.authors,
          image: book.imageLinks.thumbnail,
          shelf,
          mainShelf: shelf,
          industryIdentifiers: book.industryIdentifiers?.map((industryIdentifier: { type: string, identifier: string }) => industryIdentifier.identifier)
        });
      }
      return booksPerShelf;
    });

export const searchForBooks: (query: string, maxResults: number) => Promise<Book[]> = (query: string, maxResults: number) =>
  fetch(`${api}/${APIS.default.SEARCH_FOR_BOOKS.url}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((res) => res.books)
    .then((booksResponse: any) => {
      const books: Book[] = [];

      if (!booksResponse.error) {
        for (const book of booksResponse) {
          const shelf: 'currentlyReading' | 'wantToRead' | 'read' = book.shelf ?  book.shelf : 'none';
          books.push({
            id: book.id,
            title: book.title,
            subtitle: book.subtitle,
            authors: book.authors ? book.authors : [],
            image: book.imageLinks?.thumbnail,
            shelf,
            mainShelf: shelf,
            industryIdentifiers: book.industryIdentifiers? book.industryIdentifiers.map((industryIdentifier: { type: string, identifier: string }) => industryIdentifier.identifier) : []
          });
        }
      }

      return books;
    });

export const updateBookShelf = (bookId: string, shelf: string) =>
  fetch(`${api}/${APIS.default.UPDATE_BOOK.url(bookId)}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());