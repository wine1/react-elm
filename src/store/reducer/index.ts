import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'

export default combineReducers({
  cart,
})
const getCartProduct = (state: any) => fromCart.getCartProduct(state.cart)

export const getCartList = (state: any) => {
  return getCartProduct(state)
}

export const getTotal = (state: any) => {
  console.log('getTotal', state)
  let total = 0
  let list = state.cart?.cartLists
  if (list?.length) {
    list.forEach((item: any) => {
      total += item.price * item.count
    })
  }
  return total
}

export const getCount = (state: any) => {
  let count = 0
  let list = state.cart?.cartLists
  if (list?.length) {
    list.forEach((item: any) => {
      count += item.count
    })
  }
  return count
}
