import ActionButton from 'antd/lib/modal/ActionButton'
import { ADD_TO_CART, CLEAR_CART } from '../action/actionTypes'
const initialState = {
  cartLists: [],
}

// reducer
const cartLists = (state = initialState.cartLists, action: any) => {
  console.log(12345, state, action)
  switch (action.type) {
    case ADD_TO_CART:
      let copyState: any = state
      for (let i = 0; i < copyState.length; i++) {
        if (copyState[i]._id === action.cartLists._id) {
          copyState[i].count++
          return copyState
        }
      }

      return [...state, action.cartLists]
    default:
      return state
  }
}

export const getCartProduct = (state: any) => {
  console.log('getCartProduct', state)
  return state.cartLists || []
}

const cart = (state = initialState, action: any) => {
  console.log('action.typ', action.type)
  if (action.type === CLEAR_CART) {
    return initialState.cartLists
  } else {
    return {
      cartLists: cartLists(state.cartLists, action),
    }
  }
}

export default cart
