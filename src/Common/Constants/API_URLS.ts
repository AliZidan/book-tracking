 const APIS = {
    GET_ALL_BOOKS: {
        url: 'books',
        method: 'GET'
    },
    SEARCH_FOR_BOOKS: {
        url: 'search',
        method: 'GET'
    },
    UPDATE_BOOK: {
        url: (bookId: string) => `books/${bookId}`,
        method: 'GET'
    },
};

export default APIS;