import { CartType, CartItemType } from './types'

export type actionType =
  | { type: 'ADD'; payload: CartItemType }
  | { type: 'REMOVE'; payload: CartItemType }
  | { type: 'INCREASE'; payload: CartItemType }
  | { type: 'DECREASE'; payload: CartItemType }
  | { type: 'SHOW' }
  | { type: 'HIDE' }
  | { type: 'CLEAR' }

const cartReducer = (state: CartType, action: actionType): CartType => {
  switch (action.type) {
    case 'ADD':
      action.payload.quantity = 1
      action.payload.amount = action.payload.price * action.payload.quantity

      return {
        ...state,
        total_items: state.total_items + 1,
        total_amount: state.total_amount + action.payload.price,
        items: [...state.items, action.payload],
      }
    case 'REMOVE':
      return {
        ...state,
        total_items: state.total_items - 1,
        total_amount: state.total_amount - action.payload.price,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }
    case 'INCREASE':
      return {
        ...state,
        total_items: state.total_items + 1,
        total_amount: state.total_amount + action.payload.price,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                amount: item.amount + item.price,
              }
            : item,
        ),
      }
    case 'DECREASE':
      return {
        ...state,
        total_items: state.total_items - 1,
        total_amount: state.total_amount - action.payload.price,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                amount: item.amount - item.price,
              }
            : item,
        ),
      }
    case 'SHOW':
      return {
        ...state,
        isVisible: true,
      }
    case 'HIDE':
      return {
        ...state,
        isVisible: false,
      }
    case 'CLEAR':
      return {
        total_amount: 0,
        total_items: 0,
        items: [],
        isVisible: true,
      }
    default:
      return state
  }
}

export default cartReducer
