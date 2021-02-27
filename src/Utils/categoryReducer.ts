export type stateType = {
  categories: Array<string>
}

export type actionType =
  | { type: 'ADD'; payload: string }
  | { type: 'REMOVE'; payload: string }
  | { type: 'ALL' }
  | { type: 'RESET' }

const categoryReducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case 'ADD':
      return {
        categories: [...state.categories, action.payload],
      }
    case 'ALL':
      return {
        categories: [
          'men clothing',
          'jewelery',
          'electronics',
          'women clothing',
        ],
      }
    case 'REMOVE':
      return {
        categories: state.categories.filter(
          (category) => category !== action.payload,
        ),
      }

    case 'RESET':
      return {
        categories: [],
      }
    default:
      return state
  }
}

export default categoryReducer
