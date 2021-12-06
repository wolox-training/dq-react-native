import testReducer, { initialState } from '@redux/books/reducer';
import { actions } from './actions';

const getAction = {
  type: actions.GET_BOOKS,
  target: 'books'
};

const getActionSuccessEmpty = {
    type: actions.GET_BOOKS_SUCCESS,
    target: 'books',
    payload: []
};
const books = [{id: '1', title: 'asdasdasd', author: 'dasdasdasd asdasd', genre: 'asdasdasdas', publisher: 'dasdasdasd', year: 'dasdasd', maker: 'asdasd'}, 
                {id: '2', title: 'asdasdasd', author: 'dasdasdasd asdasd', genre: 'asdasdasdas', publisher: 'dasdasdasd', year: 'dasdasd', maker: 'asdasd'}, 
                {id: '3', title: 'asdasdasd', author: 'dasdasdasd asdasd', genre: 'asdasdasdas', publisher: 'dasdasdasd', year: 'dasdasd', maker: 'asdasd'}]
const getActionSuccess = {
    type: actions.GET_BOOKS_SUCCESS,
    target: 'books',
    payload: books
};

const getActionError = {
    type: actions.GET_BOOKS_FAILURE,
    target: 'books',
    payload: 'ERROR'
};

const searchAction = {
    type: actions.SEARCH_BOOKS,
    target: 'bookSearch',
    payload: 'Diego'
};

describe('book reducer', () => {
    test('get_books', () => {
        expect(testReducer(undefined, getAction)).toEqual({
            ...initialState,
            booksLoading: true
        });
    });

    test('get_books empty', () => {
        expect(testReducer(undefined, getActionSuccessEmpty)).toEqual({
            ...initialState,
            booksLoading: false,
            books: []
        });
    });

    test('get_books success', () => {
        expect(testReducer(undefined, getActionSuccess)).toEqual({
            ...initialState,
            booksLoading: false,
            books: books
        });
    });

    test('get_books failure', () => {
        expect(testReducer(undefined, getActionError)).toEqual({
            ...initialState,
            booksLoading: false,
            booksError: 'ERROR'
        });
    });

});

describe('Search Books', () => {
    test('search_books', () => {
        expect(testReducer(undefined, searchAction)).toEqual({
            ...initialState,
            bookSearch: 'Diego'
        });
    });
});