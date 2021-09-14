import * as types from './actionTypes'

const addToCartUnsafe = (shopid: number, value: any) => ({
  type: types.ADD_TO_CART,
  shopid: { shopid, value },
})

export const addToCart = (shopid: number, value: any) => (dispatch: any, getState: any) => {
  console.log(shopid, value, 222, getState().cart)
  // if (getState().products.byId[id].inventory > 0) {
  dispatch(addToCartUnsafe(shopid, value))
  // }
}
export const clearCart = () => ({
  type: types.CLEAR_CART,
})
