import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export default GlobalStyle
