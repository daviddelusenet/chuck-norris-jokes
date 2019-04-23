import { combineReducers } from 'redux';
import jokesReducer from './jokesReducer/jokesReducer';

const mainReducer = combineReducers({
  jokes: jokesReducer,
});

export default mainReducer;
