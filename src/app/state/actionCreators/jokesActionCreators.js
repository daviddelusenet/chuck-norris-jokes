/* eslint import/prefer-default-export: 0 */
import JOKES from '../actions/jokesActions/jokesActions';

const API_URL = 'http://api.icndb.com/jokes';

export const getJoke = id => (dispatch) => {
  fetch(`${API_URL}/jokes/${id}`)
    .then(response => response.json())
    .then(({ value }) => {
      dispatch({
        jokes: value,
        type: JOKES.SET_JOKES,
      });
    });
};

export const getRandomJokes = amount => (dispatch) => {
  fetch(`${API_URL}/random/${amount}`)
    .then(response => response.json())
    .then(({ value }) => {
      dispatch({
        jokes: value,
        type: JOKES.SET_JOKES,
      });
    });
};

export const toggleStarredJoke = id => ({
  id,
  type: JOKES.TOGGLE_STARRED_JOKE,
});
