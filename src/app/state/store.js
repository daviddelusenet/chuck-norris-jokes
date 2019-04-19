import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import mainReducer from './reducers/mainReducer';

export default createStore(
  mainReducer,
  applyMiddleware(logger),
);
