import { StyledJoke, Text } from './Joke.sc';

import ButtonIcon from '../ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';
import React from 'react';

const Joke = ({
  children,
  isStarred,
  onRemoveIsStarred,
  onToggleIsStarred,
}) => (
  <StyledJoke>
    <Text dangerouslySetInnerHTML={{ __html: children }} />
    {onRemoveIsStarred && (
      <ButtonIcon onClick={onRemoveIsStarred} type={ButtonIcon.types.cross} />
    )}
    {onToggleIsStarred && (
      <ButtonIcon
        onClick={onToggleIsStarred}
        type={isStarred ? ButtonIcon.types.starSolid : ButtonIcon.types.starRegular}
      />
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
