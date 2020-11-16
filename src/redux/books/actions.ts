import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

export const actions = createTypes(completeTypes(['GET_BOOKS'], ['SEARCH_BOOKS']), '@@BOOKS');

export const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getBooks
  }),
  searchBooks: (text: string) => ({
    type: actions.SEARCH_BOOKS,
    target: 'bookSearch',
    payload: text
  })
};

export default actionCreators;
