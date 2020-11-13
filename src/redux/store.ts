import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/ReactotronConfig';
import { fetchMiddleware } from 'redux-recompose';

import book from './books/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({ book, auth });
const middlewares = [applyMiddleware(thunk, fetchMiddleware)];
if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}
const store = createStore(rootReducer, compose(...middlewares));
export default store;
