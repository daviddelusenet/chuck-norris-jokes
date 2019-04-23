import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRandomJokes } from './state/actionCreators/jokesActionCreators';
import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import Joke from './components/Joke/Joke';
import JokesList from './components/JokesList/JokesList';
import PropTypes from 'prop-types';
import React from 'react';

class ChuckNorrisJokesApp extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      getRandomJokes: PropTypes.func.isRequired,
    }).isRequired,
    jokes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
    starredJokes: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getRandomJokes(10);
  }

  render() {
    const { jokes, starredJokes } = this.props;

    const jokeArray = jokes.map(({ id, joke }) => (
      <Joke id={id} isStarred={starredJokes.includes(id)} key={id}>
        {joke}
      </Joke>
    ));

    return (
      <>
        <GlobalStyle />
        <JokesList>
          {jokeArray}
        </JokesList>
      </>
    );
  }
}

const mapStateToProps = ({ jokes: { jokes, starredJokes } }) => ({
  jokes,
  starredJokes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getRandomJokes,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(ChuckNorrisJokesApp));
