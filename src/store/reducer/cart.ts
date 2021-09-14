import ActionButton from 'antd/lib/modal/ActionButton'
import { ADD_TO_CART, CLEAR_CART } from '../action/actionTypes'
const initialState = {
  shopid: [],
  quantity: [],
  CartList: [],
}

// reducer
const shopId = (state = initialState.shopid, action: any) => {
  // console.log(12345, state, action)
  switch (action.type) {
    case ADD_TO_CART:
      // @ts-ignore
      if (state.indexOf(action.shopid._id) !== -1) {
        return state
      }
      return [...state, action.shopid]
    default:
      return state
  }
}

// reducer
const quantity = (state = initialState.quantity, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
    default:
      return state
  }
}

const CartList = (state = initialState.quantity, action: any) => {
  // switch(action.type){
  //   case
  // }
}

export const getAddedIds = (state: any) => {
  // console.log(1234, state, addedIds)
  return state.shopId
}
export const getQuantity = (state: any, productId: any) => state.quantity[productId] || 0

export const getCartProduct = (state: any) => {
  console.log('getCartProduct', state)
  return state.shopId[0].value || []
}

const cart = (state = initialState, action: any) => {
  if (action.type === CLEAR_CART) {
    return initialState
  } else {
    return {
      shopId: shopId(state.shopid, action),
    }
  }
}

export default cart
