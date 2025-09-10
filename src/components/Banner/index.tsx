import { useParams } from 'react-router-dom'

import { Imagem, Text, Titulo, Container } from './styles'

//// import { useGetBannerQuery } from '../../services/api'

type BannerParams = {
  id: string
}

const Banner = () => {
  const { id } = useParams() as BannerParams
  // const { data: restaurant } = useGetBannerQuery(id)

  return (
    <Imagem style={{ backgroundImage: `url('')` }}>
      <div className="container">
        <Container>
          <div>
            <Text>Restaurante</Text>
          </div>
          <div>
            <Titulo>Nome do Restaurante</Titulo>
          </div>
        </Container>
      </div>
    </Imagem>
  )
}

export default Banner
