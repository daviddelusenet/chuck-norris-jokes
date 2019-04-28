import { Button, StyledJokesList } from './JokesList.sc';
import { getRandomJokes, toggleStarredJoke } from '../../state/actionCreators/jokesActionCreators';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Joke from '../Joke/Joke';
import PropTypes from 'prop-types';
import React from 'react';

class JokesList extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      getRandomJokes: PropTypes.func.isRequired,
      toggleStarredJoke: PropTypes.func.isRequired,
    }).isRequired,
    jokes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
    starredJokeIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  handleGetRandomJokes = () => {
    const { actions } = this.props;
    actions.getRandomJokes(10);
  };

  handleToggleStarredJoke = id => () => {
    const { actions, starredJokeIds } = this.props;

    if (starredJokeIds.length >= 10 && !starredJokeIds.includes(id)) {
      alert('Only a maximum of 10 starred jokes are allowed');
    } else {
      actions.toggleStarredJoke(id);
    }
  };

  render() {
    const { jokes, starredJokeIds } = this.props;

    const jokeArray = jokes.map(({ id, joke }) => (
      <Joke
        id={id}
        isStarred={starredJokeIds.includes(id)} key={id}
        onToggleIsStarred={this.handleToggleStarredJoke(id)}
      >
        {joke}
      </Joke>
    ));

    return (
      <StyledJokesList>
        {jokeArray}
        <Button onClick={this.handleGetRandomJokes}>Get random jokes</Button>
      </StyledJokesList>
    );
  }
}

const mapStateToProps = ({ jokes: { jokes, starredJokeIds } }) => ({
  jokes,
  starredJokeIds,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getRandomJokes,
    toggleStarredJoke,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(JokesList);
