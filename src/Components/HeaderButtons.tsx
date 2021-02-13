import React, { useContext } from 'react'

import { CartContext } from '../Contexts/CartContext'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
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
          style={{ fontSize: 'clamp(3.5rem, 10vw, 4.5rem)' }}
        />
      </button>
    )
  } else {
    return (
      <button
        className="header__btn--cart"
        onClick={() => dispatch({ type: 'SHOW' })}
      >
        <Badge
          classes={{ root: `badge` }}
          badgeContent={state.total_items}
          color="secondary"
          max={10}
          showZero
        >
          <ShoppingCartIcon
            className="header__cart"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)' }}
          />
        </Badge>
      </button>
    )
  }
}

export default HeaderButtons
