 import { Imagem, Text, Titulo, Container } from './styles'

const Banner = () => {

  return (
    <Imagem style={{ backgroundImage: `url('/src/assets/images/Hero.png')` }}>
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
