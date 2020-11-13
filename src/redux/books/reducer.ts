import { completeState, completeReducer, createReducer, onReadValue } from 'redux-recompose';
import { BookState } from '@interfaces/book';

import { actions as bookActions } from './actions';

const initialStateDescriptor = {
  books: [],
  bookSearch: ''
};

const initialState: BookState = completeState(initialStateDescriptor, ['bookSearch']);

const reducerDescription = {
  primaryActions: [bookActions.GET_BOOKS],
  override: {
    [bookActions.SEARCH_BOOKS]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
