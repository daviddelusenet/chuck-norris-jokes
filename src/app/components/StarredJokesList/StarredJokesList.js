import {
  fillStarredJokesList,
  getStarredJokeIdsFromLocalStorage,
  toggleStarredJoke,
} from '../../state/actionCreators/jokesActionCreators';

import { bindActionCreators } from 'redux';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import Joke from '../Joke/Joke';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledStarredJokesList } from './StarredJokesList.sc';

class StarredJokesList extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      fillStarredJokesList: PropTypes.func.isRequired,
      getStarredJokeIdsFromLocalStorage: PropTypes.func.isRequired,
      toggleStarredJoke: PropTypes.func.isRequired,
    }).isRequired,
    starredJokes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      joke: PropTypes.string.isRequired,
    })).isRequired,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getStarredJokeIdsFromLocalStorage();
  }

  handleFillList = () => {
    const { actions } = this.props;
    actions.fillStarredJokesList();
  };

  handleRemoveStarredJoke = id => () => {
    const { actions } = this.props;
    actions.toggleStarredJoke(id);
  };

  render() {
    const { starredJokes } = this.props;

    const starredJokeArray = starredJokes.map(({ id, joke }) => (
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
        <Button onClick={this.handleFillList}>
          {'Fill starred jokes list'}
        </Button>
        {starredJokeArray}
      </StyledStarredJokesList>
    );
  }
}

const mapStateToProps = ({ jokes: { starredJokes } }) => ({
  starredJokes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fillStarredJokesList,
    getStarredJokeIdsFromLocalStorage,
    toggleStarredJoke,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarredJokesList);
