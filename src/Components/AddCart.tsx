import React from 'react'

type Props = {
  added: boolean
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const AddCart: React.FC<Props> = ({ added, handleClick }: Props) => {
  if (!added) {
    return (
      <button
        className="product__cart-group--add-to-cart"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    )
  } else {
    return <button className="product__cart-group--add-more">Add more</button>
  }
}

export default AddCart
