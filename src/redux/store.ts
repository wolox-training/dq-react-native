import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import book from './books/reducer';

const rootReducer = combineReducers({ book });
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
