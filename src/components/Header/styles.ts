import styled from 'styled-components'

import bannerImg from '../../assets/images/Hero.png'
import { breakpoints } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  background-image: url(${bannerImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;

  .container {
    height: 384px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    padding: 40px 0;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Titulo = styled.h1`
  max-width: 540px;
  font-weight: bold;
  width: 100%;
  margin: auto;
  font-size: 36px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    padding: 0 20px;
  }
`
