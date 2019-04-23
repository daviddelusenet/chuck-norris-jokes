/* eslint sort-keys: 0 */
// The sort-keys rule is disabled because this caused troubles with overwriting state
import JOKES from '../../actions/jokesActions/jokesActions';

const DEFAULT_STATE = {
  jokes: [],
  starredJokes: [],
};

const jokesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case JOKES.SET_JOKES:
      return {
        ...state,
        jokes: action.jokes,
      };

    case JOKES.TOGGLE_STARRED_JOKE: {
      const { id } = action;
      const index = state.starredJokes.indexOf(id);

      if (index > -1) {
        return {
          ...state,
          starredJokes: [
            ...state.starredJokes.slice(0, index),
            ...state.starredJokes.slice(index + 1),
          ],
        };
      }

      return {
        ...state,
        starredJokes: [
          ...state.starredJokes,
          id,
        ],
      };
    }

    default:
      return state;
  }
};

export default jokesReducer;
