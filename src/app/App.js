import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import JokesList from './components/JokesList/JokesList';
import React from 'react';
import StarredJokesList from './components/StarredJokesList/StarredJokesList';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 auto;
  padding: 60px 20px;
  max-width: 960px;
`;

const ChuckNorrisJokesApp = () => (
  <StyledApp>
    <GlobalStyle />
    <JokesList />
    <StarredJokesList />
  </StyledApp>
);

export default hot(module)(ChuckNorrisJokesApp);
