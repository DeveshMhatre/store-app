import React, { useContext } from 'react'

import { CircularProgress } from '@material-ui/core/'

import { ProductsContext } from '../Contexts/ProductsContext'

const Products: React.FC = () => {
  const products = useContext(ProductsContext)

  console.log(products)

  if (products.isLoading) {
    return (
      <>
        <CircularProgress />
      </>
    )
  } else {
    return (
      <>
        <h1>Products have been fetched</h1>
      </>
    )
  }
}

export default Products
