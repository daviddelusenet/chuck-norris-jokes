import { getStarredJokeIdsFromLocalStorage, toggleStarredJoke } from '../../state/actionCreators/jokesActionCreators';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Joke from '../Joke/Joke';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledStarredJokesList } from './StarredJokesList.sc';

class StarredJokesList extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      getStarredJokeIdsFromLocalStorage: PropTypes.func.isRequired,
      toggleStarredJoke: PropTypes.func.isRequired,
    }).isRequired,
    starredJokes: PropTypes.arrayOf(PropTypes.shape({

    })).isRequired,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getStarredJokeIdsFromLocalStorage();
  }

  handleRemoveStarredJoke = id => () => {
    const { actions } = this.props;
    actions.toggleStarredJoke(id);
  };

  render() {
    const { starredJokes } = this.props;

    const jokeArray = starredJokes.map(({ id, joke }) => (
      <Joke
        id={id}
        key={id}
        onRemoveIsStarred={this.handleRemoveStarredJoke(id)}
      >
        {joke}
      </Joke>
    ));

    return (
      <StyledStarredJokesList>
        {jokeArray}
      </StyledStarredJokesList>
    );
  }
}

const mapStateToProps = ({ jokes: { starredJokes } }) => ({
  starredJokes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getStarredJokeIdsFromLocalStorage,
    toggleStarredJoke,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarredJokesList);
