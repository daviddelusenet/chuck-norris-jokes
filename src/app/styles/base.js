import { LUCIDA_GRANDE, MINE_SHAFT, SEASHELL } from '../utils/consts';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${SEASHELL};
    font-family: ${LUCIDA_GRANDE};
    color: ${MINE_SHAFT};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
