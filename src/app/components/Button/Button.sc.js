import { FROLY, WHITE } from '../../utils/consts';
import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  flex: 0 0 auto;
  margin: 0 0 40px 0;
  outline: none;
  border: 0;
  background: ${FROLY};
  padding: 0;
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${WHITE};
  font-weight: bold;
`;

export default StyledButton;
