import React from 'react'

import Header from './Header'
import Products from './Products'
import Cart from './Cart'

import ProductsContextProvider from '../Contexts/ProductsContext'
import CategoryContextProvider from '../Contexts/CategoryContext'
import CartContextProvider from '../Contexts/CartContext'

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>
          <Header />
          <Products />
          <Cart />
        </CartContextProvider>
      </CategoryContextProvider>
    </ProductsContextProvider>
  )
}

export default App
