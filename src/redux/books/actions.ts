import { Dispatch } from 'redux';
import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

export const actions = createTypes(completeTypes(['GET_BOOKS']), '@@BOOKS');

export const actionCreators = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({
      type: actions.GET_BOOKS,
      target: 'books',
      service: BookService.getBooks
    });
  }
};

export default actionCreators;
