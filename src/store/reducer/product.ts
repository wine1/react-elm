import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS } from '../action/actionTypes'
import { ADD_TO_CART } from '../action/actionTypes'

const initialState = {
  product: [],
}

const products = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log(111, state)
      return {
        ...state,
        inventory: state.inventory - 1,
      }
    default:
      return state
  }
}

const byId = (state: any = {}, action: any) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj: any, product: any) => {
          obj[product.id] = product
          return obj
        }, {}),
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        }
      }
      return state
  }
}

export default combineReducers({
  byId,
})
export const getProduct = (state: any, id: any) => state.byId[id]
