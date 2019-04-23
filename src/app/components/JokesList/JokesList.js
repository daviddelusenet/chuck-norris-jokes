import Joke from '../Joke/Joke';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledJokesList } from './JokesList.sc';

class JokesList extends React.PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(Joke)).isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <StyledJokesList>
        {children}
      </StyledJokesList>
    );
  }
}

export default JokesList;
