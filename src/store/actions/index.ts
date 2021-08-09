import * as types from './ActionTypes'
import shop from '../../api/shop'

const receiveProducts=(products:any)=>({
    type:types.RECEIVE_PRODUCTS,
    products
})

export const addToCart = (productId: string) => ({
    type: types.ADD_TO_CART,
        productId
})


export const getAllProducts = () => (dispatch:any) =>{
    shop.getProducts((products:any) => {
        dispatch(receiveProducts(products))
    })
}