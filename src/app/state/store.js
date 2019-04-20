import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import mainReducer from './reducers/mainReducer';
import thunk from 'redux-thunk';

export default createStore(
  mainReducer,
  applyMiddleware(thunk, logger),
);
