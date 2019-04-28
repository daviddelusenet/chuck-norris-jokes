import Cross from '../../styles/svg/cross.svg';
import PropTypes from 'prop-types';
import React from 'react';
import StarRegular from '../../styles/svg/star-regular.svg';
import StarSolid from '../../styles/svg/star-solid.svg';
import StyledButtonIcon from './ButtonIcon.sc';

const ButtonIcon = ({ onClick, type: Type }) => (
  <StyledButtonIcon onClick={onClick}>
    <Type />
  </StyledButtonIcon>
);

ButtonIcon.types = {
  cross: Cross,
  starRegular: StarRegular,
  starSolid: StarSolid,
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Object.values(ButtonIcon.types)).isRequired,
};

export default ButtonIcon;
