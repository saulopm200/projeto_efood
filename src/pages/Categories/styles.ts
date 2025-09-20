import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 10px;
  }
`

export const VoltarButton = styled.button`
  background: none;
  border: none;
  color: ${cores.coral};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px 0;
  padding: 10px 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`

export const HeaderRestaurante = styled.div`
  display: flex;
  gap: 32px;
  margin: 32px 0;
  padding: 32px;
  background-color: ${cores.branco};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 280px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;

    img {
      width: 100%;
      height: 200px;
    }
  }
`

export const RestauranteTitulo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.coral};
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`

export const RestauranteDescricao = styled.p`
  font-size: 16px;
  color: ${cores.coral};
  line-height: 1.5;
  margin-bottom: 16px;
`

export const RestauranteAvaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.coral};
`

export const Estrela = styled.span`
  color: #ffd700;
  font-size: 20px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 32px 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const PratoCard = styled.div`
  background-color: ${cores.branco};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`

export const PratoImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const PratoInfo = styled.div`
  padding: 16px;
`

export const PratoTitulo = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${cores.coral};
  margin-bottom: 8px;
`

export const PratoDescricao = styled.p`
  font-size: 14px;
  color: ${cores.coral};
  line-height: 1.4;
  margin-bottom: 8px;
`

export const PratoPorcao = styled.span`
  font-size: 12px;
  color: ${cores.coral};
  background-color: ${cores.bege};
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 12px;
`

export const PratoPreco = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.coral};
  margin-bottom: 12px;
`

export const BotaoAdicionar = styled.button`
  width: 100%;
  background-color: ${cores.coral};
  color: ${cores.branco};
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d55a5a;
  }

  &:active {
    transform: translateY(1px);
  }
`


