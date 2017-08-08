import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import Api from './utils/Api';

/* eslint-disable no-underscore-dangle */

var store = createStore(rootReducer);

export default store;