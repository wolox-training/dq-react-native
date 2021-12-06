import api from '@config/api';
import BookActions, { actions } from '@redux/books/actions';
import BookService from '@services/BookService';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { initialState } from './reducer';

const middlewares: Array<any> = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore(initialState)

beforeEach(() => store.clearActions());

describe('actions', () => {
  
  test('getBooks', () => {
    store.dispatch(BookActions.getBooks());
    expect(store.getActions()).toEqual([
      { target: 'books', type: actions.GET_BOOKS, service: BookService.getBooks }
    ]);
  });

  test('searchBooks', () => {
    store.dispatch(BookActions.searchBooks('Diego'));
    expect(store.getActions()).toEqual([
      { target: 'bookSearch', type: actions.SEARCH_BOOKS, payload: 'Diego' }
    ]);
  });
});