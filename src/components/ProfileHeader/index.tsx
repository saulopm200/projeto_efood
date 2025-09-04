import { HeaderContainer, Container } from './styles'

import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const ProfileHeader = () => {

  const openCart = () => {
    dispatch(open())
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
