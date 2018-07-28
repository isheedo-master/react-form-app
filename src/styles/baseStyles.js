import { injectGlobal } from 'styled-components';

const baseStyles = () => injectGlobal`
  html, body, #app {
    height: 100%;
  }
`;

export default baseStyles;
