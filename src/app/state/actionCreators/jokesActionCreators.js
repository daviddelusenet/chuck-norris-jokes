/* eslint import/prefer-default-export: 0 no-use-before-define: 0 */
import JOKES from '../actions/jokesActions/jokesActions';

const API_URL = 'http://api.icndb.com/jokes';
const LOCAL_STORAGE_ID = 'starredJokeIds';

export const addRandomJokes = (amount = 1) => (dispatch) => {
  getRandomJoke(amount)
    .then((jokes) => {
      dispatch(setJokes(jokes));
    });
};

export const fillStarredJokesList = () => (dispatch, getState) => {
  const { starredJokeIds } = getState().jokes;
  let i = 0;

  // Get the maximum amount of jokes we might need to add
  getRandomJoke(10 - starredJokeIds.length)
    .then((jokes) => {
      // Add the first joke right away otherwise the user needs to wait 5 seconds to see anything
      dispatch(toggleStarredJoke(jokes[i].id));
      i += 1;

      // Add the rest of the jokes after 5 seconds each
      const interval = setInterval(() => {
        const { starredJokeIds: currentStarredJokeIds } = getState().jokes;

        // There might have been manually added a starred joke in the meantime so that's why we get the
        // currentStarredJokeIds every interval
        if (currentStarredJokeIds.length < 10) {
          dispatch(toggleStarredJoke(jokes[i].id));
        } else {
          clearInterval(interval);
        }

        i += 1;
      }, 500);
    });
};

export const getJoke = id => (
  fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .then(({ value }) => value)
);

export const getRandomJoke = (amount = 1) => (
  fetch(`${API_URL}/random/${amount}`)
    .then(response => response.json())
    .then(({ value }) => value)
);

export const getStarredJokeIdsFromLocalStorage = () => (dispatch) => {
  dispatch({
    starredJokeIds: JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID)) || [],
    type: JOKES.SET_STARRED_JOKE_IDS,
  });

  dispatch(setStarredJokes());
};

export const setJokes = jokes => ({
  jokes,
  type: JOKES.SET_JOKES,
});

export const setStarredJokes = () => (dispatch, getState) => {
  const { jokes, starredJokes, starredJokeIds } = getState().jokes;
  const jokeIds = jokes.map(({ id }) => id);
  const currentStarredJokeIds = starredJokes.map(({ id }) => id);

  const newStarredJokes = starredJokeIds.map(async (starredJokeId) => {
    // Check if the joke is already in the jokes array
    if (jokeIds.includes(starredJokeId)) {
      return jokes.find(({ id }) => id === starredJokeId);
    }

    // Check if the joke is already in the starredJokes array
    if (currentStarredJokeIds.includes(starredJokeId)) {
      return starredJokes.find(({ id }) => id === starredJokeId);
    }

    // If the joke isn't in the joke of starredJokes array we need to fetch it from the API
    return getJoke(starredJokeId).then(joke => joke);
  });

  // Wait until all promises are resolved and set the starred jokes
  Promise.all(newStarredJokes)
    .then((result) => {
      dispatch({
        starredJokes: result,
        type: JOKES.SET_STARRED_JOKES,
      });
    });
};

export const setStarredJokeIdsInLocalStorage = () => (dispatch, getState) => {
  const { starredJokeIds } = getState().jokes;
  localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(starredJokeIds));
};

export const toggleStarredJoke = id => (dispatch) => {
  dispatch({
    id,
    type: JOKES.TOGGLE_STARRED_JOKE,
  });

  dispatch(setStarredJokeIdsInLocalStorage());
  dispatch(setStarredJokes());
};
