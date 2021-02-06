import { CartType, CartItemType } from './types'

export type actionType =
  | { type: 'ADD'; payload: CartItemType }
  | { type: 'REMOVE'; payload: number }
  | { type: 'INCREASE'; payload: number }
  | { type: 'DECREASE'; payload: number }
  | { type: 'CLEAR' }

const cartReducer = (state: CartType, action: actionType): CartType => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    case 'INCREASE':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }
    case 'DECREASE':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      }
    case 'CLEAR':
      return {
        items: [],
      }
    default:
      return state
  }
}

export default cartReducer
