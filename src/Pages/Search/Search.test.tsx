import * as React from "react";
import { fireEvent } from '@testing-library/react'
import SearchHOC from "./SearchHOC";
import { renderWithProviders } from "../../Common/UnitTestUtils/Provider";
import Search from './Search';
import store from '../../Store/index';
import { act } from 'react-dom/test-utils';
import { bookActions } from "../../Store/BookSlice";
describe('SearchHOC', function () {

   it('Expect books list to be shown in case of searching with valid query', async () => {

      const fetchMocking: any = jest.fn(() => Promise.resolve({
         json: () => Promise.resolve({
            books: [{
               "title": "Learning Web Development with React and Bootstrap",
               "authors": ["Harmeet Singh", "Mehul Bhatt"],
               "publishedDate": "2016-12-30",
               "description": "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
               "industryIdentifiers": [{
                  "type": "ISBN_10",
                  "identifier": "1786462494"
               }, {
                  "type": "ISBN_13",
                  "identifier": "9781786462497"
               }],
               "readingModes": {
                  "text": false,
                  "image": false
               },
               "pageCount": 278,
               "printType": "BOOK",
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "panelizationSummary": {
                  "containsEpubBubbles": false,
                  "containsImageBubbles": false
               },
               "imageLinks": {
                  "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                  "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
               "id": "sJf1vQAACAAJ"
            }]
         })
      }));

      global.fetch = fetchMocking;

      const searchComponent = renderWithProviders(
         <SearchHOC Search={Search} />, {
         store
      });

      await act(async () => {
         const queryInput = await searchComponent.getByPlaceholderText('Search by title, author, or ISBN');
         await fireEvent.change(queryInput, { target: { value: '   linux    ' } });
      });

      const renderedBookTitle = await searchComponent.findByText(new RegExp('Learning Web Development with React and Bootstrap', "i"));

      expect(renderedBookTitle).toBeDefined();

      const renderedBookAuthors = await searchComponent.findByText('Harmeet Singh,Mehul Bhatt');

      expect(renderedBookAuthors).toBeDefined();
   });

   it('Expect changing shelf is working correctly In Search', async () => {

      const fetchMocking: any = jest.fn(() => Promise.resolve({
         json: () => Promise.resolve({
            books: [{
               "title": "Learning Web Development with React and Bootstrap",
               "authors": ["Harmeet Singh", "Mehul Bhatt"],
               "publishedDate": "2016-12-30",
               "description": "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
               "industryIdentifiers": [{
                  "type": "ISBN_10",
                  "identifier": "1786462494"
               }, {
                  "type": "ISBN_13",
                  "identifier": "9781786462497"
               }],
               "readingModes": {
                  "text": false,
                  "image": false
               },
               "pageCount": 278,
               "printType": "BOOK",
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "panelizationSummary": {
                  "containsEpubBubbles": false,
                  "containsImageBubbles": false
               },
               "imageLinks": {
                  "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                  "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
               "id": "sJf1vQAACAAJ"
            }]
         })
      }));

      global.fetch = fetchMocking;

      const searchComponent = renderWithProviders(
         <SearchHOC Search={Search} />, {
         store
      });

      await act(async () => {
         const queryInput = await searchComponent.getByPlaceholderText('Search by title, author, or ISBN');
         await fireEvent.change(queryInput, { target: { value: '   linux2    ' } });
         const renderedBookDropDown = await searchComponent.findAllByTestId('shelf-dropdown');
         await fireEvent.change(renderedBookDropDown[0], { target: { value: 'wantToRead' } });
      });

      expect((store.getState() as any).books.booksForQuery[0].shelf).toBe('wantToRead');
   });

   it('Expect showing error message if query is empty', async () => {

      const fetchMocking: any = jest.fn(() => Promise.resolve({
         json: () => Promise.resolve({
            books: [{
               "title": "Learning Web Development with React and Bootstrap",
               "authors": ["Harmeet Singh", "Mehul Bhatt"],
               "publishedDate": "2016-12-30",
               "description": "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
               "industryIdentifiers": [{
                  "type": "ISBN_10",
                  "identifier": "1786462494"
               }, {
                  "type": "ISBN_13",
                  "identifier": "9781786462497"
               }],
               "readingModes": {
                  "text": false,
                  "image": false
               },
               "pageCount": 278,
               "printType": "BOOK",
               "maturityRating": "NOT_MATURE",
               "allowAnonLogging": false,
               "contentVersion": "preview-1.0.0",
               "panelizationSummary": {
                  "containsEpubBubbles": false,
                  "containsImageBubbles": false
               },
               "imageLinks": {
                  "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                  "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
               },
               "language": "en",
               "previewLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
               "infoLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
               "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
               "id": "sJf1vQAACAAJ"
            }]
         })
      }));

      global.fetch = fetchMocking;

         store.dispatch(bookActions.setBooks({
            allBooksPerShelf: null,
        }));
              store.dispatch(bookActions.searchForBooks({
            booksForQuery: null,
        }));

      const searchComponent = renderWithProviders(
         <SearchHOC Search={Search} />, {
         store
      });

      await act(async () => {
         const queryInput = await searchComponent.getByPlaceholderText('Search by title, author, or ISBN');
         await fireEvent.change(queryInput, { target: { value: '' } });
      });

      const noBooksMessage = await searchComponent.findByText('No Results For The Current Query');

      expect(noBooksMessage.innerHTML).toBe('No Results For The Current Query');
   });
});