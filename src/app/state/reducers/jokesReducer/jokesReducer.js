/* eslint sort-keys: 0 */
// The sort-keys rule is disabled because this caused troubles with overwriting state
import JOKES from '../../actions/jokesActions/jokesActions';

const DEFAULT_STATE = {
  jokes: [],
  starredJokes: [],
  starredJokeIds: [],
};

const jokesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case JOKES.SET_JOKES:
      return {
        ...state,
        jokes: action.jokes,
      };

    case JOKES.SET_STARRED_JOKES:
      return {
        ...state,
        starredJokes: action.starredJokes,
      };

    case JOKES.SET_STARRED_JOKE_IDS:
      return {
        ...state,
        starredJokeIds: action.starredJokeIds,
      };

    case JOKES.TOGGLE_STARRED_JOKE: {
      const { id } = action;
      const index = state.starredJokeIds.indexOf(id);

      if (index > -1) {
        return {
          ...state,
          starredJokeIds: [
            ...state.starredJokeIds.slice(0, index),
            ...state.starredJokeIds.slice(index + 1),
          ],
        };
      }

      return {
        ...state,
        starredJokeIds: [
          ...state.starredJokeIds,
          id,
        ],
      };
    }

    default:
      return state;
  }
};

export default jokesReducer;
