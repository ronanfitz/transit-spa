<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';
=======
import createStore from 'redux';
>>>>>>> Initial dashboard integration
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */

<<<<<<< HEAD
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ Api })),
);
=======
const store = createStore(rootReducer);
>>>>>>> Initial dashboard integration

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunkMiddleware.withExtraArgument({ Api })),
//   logger,
// );

export default store;
