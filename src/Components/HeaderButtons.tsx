import React, { useContext } from 'react'

import { CartContext } from '../Contexts/CartContext'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const HeaderButtons: React.FC = () => {
  const { state, dispatch } = useContext(CartContext)

  if (state.isVisible) {
    return (
      <button
        className="header__btn--back"
        onClick={() => dispatch({ type: 'HIDE' })}
      >
        <ArrowBackIcon
          className="header__back"
          style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)' }}
        />
      </button>
    )
  } else {
    return (
      <button
        className="header__btn--cart"
        onClick={() => dispatch({ type: 'SHOW' })}
      >
        <ShoppingCartIcon
          className="header__cart"
          style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)' }}
        />
      </button>
    )
  }
}

export default HeaderButtons
