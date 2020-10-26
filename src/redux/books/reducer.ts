import { BookState } from '@interfaces/book';
import { ReduxAction } from '@interfaces/redux';

import { actions as bookActions } from './actions';

const initialState: BookState = {
  books: [],
  booksLoading: false,
  booksError: null
};
function booksReducer(state = initialState, action: ReduxAction): BookState {
  switch (action.type) {
    case bookActions.GET_BOOKS:
      return { ...state, booksLoading: true };
    case bookActions.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload, booksLoading: false, booksError: null };
    case bookActions.GET_BOOKS_FAILURE:
      return { ...state, booksLoading: false, booksError: action.payload };
    default:
      return state;
  }
}
export default booksReducer;
