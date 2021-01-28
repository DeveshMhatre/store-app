import { Product, FetchInitialValue } from '../types'

type actionType =
  | { type: 'SUCCESS'; payload: Product[] }
  | { type: 'ERROR'; payload: string }

const reducer = (
  state: FetchInitialValue,
  action: actionType,
): FetchInitialValue => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
