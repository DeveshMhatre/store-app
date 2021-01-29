import React from 'react'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h2 className="header__logo">Shop 4 All</h2>
      <ShoppingCartIcon
        className="header__cart"
        style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)' }}
      />
    </header>
  )
}

export default Header
