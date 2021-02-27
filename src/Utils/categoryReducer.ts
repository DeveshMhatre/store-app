export type stateType = {
  categories: Array<string>
}

export type actionType =
  | { type: 'ADD'; payload: string }
  | { type: 'REMOVE'; payload: string }

const categoryReducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case 'ADD':
      return {
        categories: [...state.categories, action.payload],
      }
    case 'REMOVE':
      return {
        categories: state.categories.filter(
          (category) => category !== action.payload,
        ),
      }
    default:
      return state
  }
}

export default categoryReducer
