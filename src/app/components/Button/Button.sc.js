import { SILVER } from '../../utils/consts';
import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  flex: 0 0 auto;
  margin: 0 0 40px 0;
  outline: none;
  border: 1px solid ${SILVER};
  background: transparent;
  padding: 0;
  width: 100%;
  height: 40px;
`;

export default StyledButton;
