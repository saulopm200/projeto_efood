import { HeaderContainer, Container } from './styles'

import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo (3).png'


const ProfileHeader = () => {
  // Mock data para demonstração - em produção seria gerenciado por um estado global
  const items: unknown[] = []

  const openCart = () => {
    // Mock function - em produção seria implementada com Redux/
    console.log('Abrindo carrinho')
  }

  return (
    <HeaderContainer>
      <Container className="container">
        <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Restaurantes</p>
        </div>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <div>
          <button
            onClick={openCart}
            style={{ fontSize: '18px', fontWeight: 'bold' }}
          >
            {items.length} produto(s) no carrinho
          </button>
        </div>
      </Container>
    </HeaderContainer>
  )
}

export default ProfileHeader
