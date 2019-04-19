import { BLACK, LUCIDA_GRANE } from '../utils/consts';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${BLACK};
    font-family: ${LUCIDA_GRANE};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
