import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../action/actionTypes'
const initialState = {
  cartLists: [],
}

// reducer
const cartLists = (state = initialState.cartLists, action: any) => {
  let copyState: any = state
  switch (action.type) {
    case ADD_TO_CART:
      for (let i = 0; i < copyState.length; i++) {
        if (copyState[i]._id === action.cartLists._id) {
          copyState[i].count++
          return copyState
        }
      }
      return [...state, action.cartLists]
    case REMOVE_FROM_CART:
      for (let i = 0; i < copyState.length; i++) {
        if (copyState[i]._id === action.cartLists._id) {
          copyState[i].count--
          return copyState
        }
      }
      return [...state, action.cartLists]
    default:
      return state
  }
}

export const getCartProduct = (state: any) => {
  return state.cartLists || []
}

const cart = (state = initialState, action: any) => {
  if (action.type === CLEAR_CART) {
    return initialState.cartLists
  } else {
    return {
      cartLists: cartLists(state.cartLists, action),
    }
  }
}

export default cart
