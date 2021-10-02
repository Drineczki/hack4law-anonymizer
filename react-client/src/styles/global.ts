import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const baseFontFamily = 'Poppins';

const globalStyles = css`
  html {
    font-size: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${baseFontFamily}, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

const defaultStylesReset = css`
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  input,
  textarea,
  button,
  select {
    font-family: ${baseFontFamily}, sans-serif;
    border-radius: 0;
    box-sizing: border-box;
  }

  button {
    padding: 0;
    font-size: 14px;
    cursor: pointer;
    background: none;
    border: 0;
    &:focus,
    &:active {
      outline: 0;
    }
  }

  a,
  input,
  textarea,
  select,
  ul,
  li {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    &:focus,
    &:active {
      outline: 0;
    }
  }

  a {
    color: inherit;
    cursor: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5,
  p {
    font-size: 1rem;
  }

  @keyframes slide-in-bottom {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-out-little {
    0% {
      visibility: visible;
      opacity: 0.2;
    }
    99% {
      visibility: visible;
      opacity: 0;
    }
    100% {
      visibility: hidden;
      opacity: 0;
    }
  }

  @keyframes fade-in-little {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    1% {
      visibility: visible;
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 0.3;
    }
  }

  @keyframes fade-in {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    1% {
      visibility: visible;
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${globalStyles}
  ${defaultStylesReset}
`;
