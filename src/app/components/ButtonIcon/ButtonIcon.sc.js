import { SILVER } from '../../utils/consts';
import styled from 'styled-components';

const StyledButtonIcon = styled.button`
  appearance: none;
  flex: 0 0 auto;
  margin: 0 0 0 40px;
  outline: none;
  border: 0;
  background: transparent;
  padding: 0;
  width: 40px;
  height: 40px;

  svg {
    width: 40px;
    height: 40px;
    fill: ${SILVER};
  }
`;

export default StyledButtonIcon;
