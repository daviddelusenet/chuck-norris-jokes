import Cross from '../../styles/svg/cross.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { SILVER } from '../../utils/consts';
import StarRegular from '../../styles/svg/star-regular.svg';
import StarSolid from '../../styles/svg/star-solid.svg';
import StyledButtonIcon from './ButtonIcon.sc';

const ButtonIcon = ({ fill, onClick, type: Type }) => (
  <StyledButtonIcon onClick={onClick}>
    <Type fill={fill} />
  </StyledButtonIcon>
);

ButtonIcon.types = {
  cross: Cross,
  starRegular: StarRegular,
  starSolid: StarSolid,
};

ButtonIcon.propTypes = {
  fill: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Object.values(ButtonIcon.types)).isRequired,
};

ButtonIcon.defaultProps = {
  fill: SILVER,
};

export default ButtonIcon;
