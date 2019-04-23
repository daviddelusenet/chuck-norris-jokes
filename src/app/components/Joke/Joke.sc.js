import styled from 'styled-components';

export const StyledJoke = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 32px;
  border: 1px solid #1a1a1a;
  padding: 20px;
  max-width: 640px;
`;

export const Text = styled.p`
  flex: 1 1 auto;
  font-size: 10px;
`;

export const ButtonStar = styled.button`
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
    fill: yellow;
    stroke: yellow;
  }
`;
