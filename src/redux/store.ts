import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/ReactotronConfig';

import book from './books/reducer';

const rootReducer = combineReducers({ book });
const middlewares = [applyMiddleware(thunk)];
if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}
const store = createStore(rootReducer, compose(...middlewares));
export default store;
