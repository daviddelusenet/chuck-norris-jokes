import { ALABASTER, LUCIDA_GRANDE, MINE_SHAFT } from '../utils/consts';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${ALABASTER};
    color: ${MINE_SHAFT};
    font-family: ${LUCIDA_GRANDE};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
