import React from 'react'

import Header from './Header'
import Products from './Products'

import ProductsContextProvider from '../Contexts/ProductsContext'
import CartContextProvider from '../Contexts/CartContext'

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Header />
        <Products />
      </CartContextProvider>
    </ProductsContextProvider>
  )
}

export default App
