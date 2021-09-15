import * as types from './actionTypes'

const addToCartUnsafe = (value: any) => ({
  type: types.ADD_TO_CART,
  cartLists: value,
})

export const addToCart = (shopid: number, value: any) => (dispatch: any, getState: any) => {
  value.shopid = shopid
  value.count = value.count ? value.count++ : 1
  dispatch(addToCartUnsafe(value))
}
export const clearCart = () => ({
  type: types.CLEAR_CART,
})
