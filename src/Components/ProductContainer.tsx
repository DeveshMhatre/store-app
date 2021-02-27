import React, { useEffect, useContext, useState } from 'react'

import { CartContext } from '../Contexts/CartContext'

import AddCart from './AddCart'

import { Product } from '../Utils/types'

import Snackbar from '@material-ui/core/Snackbar'

type Props = {
  key: number
  product: Product
}

const ProductContainer: React.FC<Props> = ({ product }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const { state, dispatch } = useContext(CartContext)

  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 0,
    amount: 0,
  }

  useEffect(() => {
    const added = state.items.some((i) => i.id === product.id)
    setIsAdded(added)
  }, [state.items])

  const handleAddClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    }

    dispatch({ type: 'ADD', payload: item })
  }

  const handleIncreaseClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    }

    dispatch({ type: 'INCREASE', payload: item })
  }

  const handleCloseClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="product">
      <Snackbar
        classes={{ root: `snackbar` }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleCloseClick}
        message="Item added to Cart!"
      />

      <img src={product.image} alt={product.title} className="product__image" />
      <p title={product.title} className="product__title">
        {product.title}
      </p>
      <p title={product.description} className="product__desc">
        {product.description}
      </p>

      <span className="product__cart-group">
        <p className="product__cart-group--price">
          &#36; {product.price.toFixed(2)}
        </p>
        <AddCart
          added={isAdded}
          handleAddClick={handleAddClick}
          handleIncreaseClick={handleIncreaseClick}
        />
      </span>
      <div className="product__category">
        <span className="product__category--label">{product.category}</span>
      </div>
    </div>
  )
}

export default ProductContainer
