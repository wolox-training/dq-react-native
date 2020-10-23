import { Dispatch } from 'redux';
import { DATA } from '@app/screens/HomeScreen/constants';

export const actions = {
  GET_BOOKS: '@@BOOKS/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOKS/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOKS/GET_BOOKS_FAILURE'
} as const;

export const actionCreators = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS });
    const response = { ok: true, data: DATA, problem: null };
    if (response.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.problem });
    }
  }
};

export default actionCreators;