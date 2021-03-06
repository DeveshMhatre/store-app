import React, { createContext, useReducer, useMemo } from 'react'

import { CartType } from '../Utils/types'
import cartReducer, { actionType } from '../Utils/cartReducer'

type Props = {
  children: React.ReactNode
}

const initialValue: CartType = {
  total_items: 0,
  total_amount: 0,
  items: [],
  isVisible: false,
}

export const CartContext = createContext<{
  state: CartType
  dispatch: React.Dispatch<actionType>
}>({ state: initialValue, dispatch: () => null })

const CartContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state])

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider
