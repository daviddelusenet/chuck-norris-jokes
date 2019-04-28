import { SILVER } from '../../utils/consts';
import styled from 'styled-components';

export const StyledJoke = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 32px;
  border: 1px solid ${SILVER};
  padding: 20px;
  max-width: 640px;
`;

export const Text = styled.p`
  flex: 1 1 auto;
  font-size: 10px;
`;
