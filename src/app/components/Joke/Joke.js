import {
  ButtonRemove,
  ButtonStar,
  StyledJoke,
  Text,
} from './Joke.sc';

import PropTypes from 'prop-types';
import React from 'react';
import StarRegular from '../../styles/svg/star-regular.svg';
import StarSolid from '../../styles/svg/star-solid.svg';

const Joke = ({
  children,
  isStarred,
  onRemoveIsStarred,
  onToggleIsStarred,
}) => (
  <StyledJoke>
    <Text dangerouslySetInnerHTML={{ __html: children }} />
    {onRemoveIsStarred && (
      <ButtonRemove onClick={onRemoveIsStarred}>
        remove
      </ButtonRemove>
    )}
    {onToggleIsStarred && (
      <ButtonStar onClick={onToggleIsStarred}>
        {isStarred ? <StarSolid /> : <StarRegular />}
      </ButtonStar>
    )}
  </StyledJoke>
);

Joke.propTypes = {
  children: PropTypes.string.isRequired,
  isStarred: PropTypes.bool,
  onRemoveIsStarred: PropTypes.func,
  onToggleIsStarred: PropTypes.func,
};

Joke.defaultProps = {
  isStarred: false,
  onRemoveIsStarred: undefined,
  onToggleIsStarred: undefined,
};

export default Joke;
