import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

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

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 10px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 32px;
  }
`
