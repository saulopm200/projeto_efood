import { createGlobalStyle } from 'styled-components'

export const cores = {
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2',
  coral: '#E66767',
  branco: '#ffffff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.begeClaro};
    color: ${cores.coral};
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }
`
