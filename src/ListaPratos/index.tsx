import type { Prato } from '../pages/Categories'
import PratosRestaurante from '../components/PratosRestaurantes'

import { Container, List } from './styles'

export type Props = {
  pratos: Prato[]
}

const ListaPratos = ({ pratos }: Props) => (
  <Container className="container">
    <div>
      <List>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <PratosRestaurante
              id={prato.id}
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              porcao={prato.porcao}
              preco={prato.preco}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ListaPratos
