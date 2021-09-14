import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import product, * as fromProduct from './product'

// console.log(123, cart, 456, product)
// reducer=function(state,action)
export default combineReducers({
  cart,
  product,
})

const getAddedIds = (state: any) => fromCart.getAddedIds(state.cart)
const getQuantity = (state: any, id: any) => fromCart.getQuantity(state, id)
const getCartProduct = (state: any) => fromCart.getCartProduct(state.cart)
const getProduct = (state: any, id: any) => fromProduct.getProduct(state.products, id)

export const getCartList = (state: any) => {
  return getCartProduct(state)
}

export const getTotal = (state: any) => {
  if (!getAddedIds(state).length || !getAddedIds(state)[0]) return 0
}
