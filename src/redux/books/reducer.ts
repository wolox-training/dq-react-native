import { completeState, completeReducer, createReducer } from 'redux-recompose';
import { BookState } from '@interfaces/book';

import { actions as bookActions } from './actions';

const initialStateDescriptor = {
  books: []
};

const initialState: BookState = completeState(initialStateDescriptor);

const reducerDescription = {
  primaryActions: [bookActions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(reducerDescription));
