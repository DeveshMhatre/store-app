import React from 'react'

import HeaderButtons from './HeaderButtons'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h2 className="header__logo">Shop 4 All</h2>
      <HeaderButtons />
    </header>
  )
}

export default Header
