import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../actions/ActionTypes'

const products = (state:any, action:any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

const byId = (state = {}, action:any) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj:any, product:any) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
        //   @ts-ignore
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action:any) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map((product:any) => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state:any, id:any) =>
  state.byId[id]

export const getVisibleProducts = (state:any) =>
  state.visibleIds.map((id:any) => getProduct(state, id))
