import React from 'react'

import Header from './Header'
import Products from './Products'
import Cart from './Cart'

import ProductsContextProvider from '../Contexts/ProductsContext'
import CartContextProvider from '../Contexts/CartContext'

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Header />
        <Products />
        <Cart />
      </CartContextProvider>
    </ProductsContextProvider>
  )
}

export default App
