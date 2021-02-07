import React from 'react'

type Props = {
  added: boolean
  handleAddClick: React.MouseEventHandler<HTMLButtonElement>
  handleIncreaseClick: React.MouseEventHandler<HTMLButtonElement>
}

const AddCart: React.FC<Props> = ({
  added,
  handleAddClick,
  handleIncreaseClick,
}: Props) => {
  if (!added) {
    return (
      <button
        className="product__cart-group--add-to-cart"
        onClick={handleAddClick}
      >
        Add to Cart
      </button>
    )
  } else {
    return (
      <button
        className="product__cart-group--add-more"
        onClick={handleIncreaseClick}
      >
        Add more
      </button>
    )
  }
}

export default AddCart
