import styled from 'styled-components'

export const ListCard = styled.div<{ $itsHome: boolean; $background: 'white' | 'orange_rose' }>`
  display: grid;
  grid-template-columns: ${props => props.$itsHome ? 'repeat(2, 1fr)' : '1fr'};
  gap: 32px;
  padding: ${props => props.$itsHome ? '80px 0' : '56px 0'};
  background-color: ${props => props.$background === 'white' ? '#ffffff' : '#FFEBD9'};
`
