import { ButtonStar, StyledJoke, Text } from './Joke.sc';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import StarRegular from '../../styles/svg/star-regular.svg';
import StarSolid from '../../styles/svg/star-solid.svg';
import { toggleStarredJoke } from '../../state/actionCreators/jokesActionCreators';

class Joke extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      toggleStarredJoke: PropTypes.func.isRequired,
    }).isRequired,
    children: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isStarred: PropTypes.bool.isRequired,
  };

  handleToggleIsStarred = () => {
    const { actions, id } = this.props;
    actions.toggleStarredJoke(id);
  };

  render() {
    const { children, isStarred } = this.props;

    return (
      <StyledJoke>
        <Text>
          {children}
        </Text>
        <ButtonStar onClick={this.handleToggleIsStarred}>
          {isStarred ? <StarSolid fill="yellow" /> : <StarRegular />}
        </ButtonStar>
      </StyledJoke>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    toggleStarredJoke,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(Joke);
