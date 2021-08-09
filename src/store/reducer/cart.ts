import { ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_FAILURE } from "../actions/ActionTypes";

interface InterInitialState {
    addedIds: Array<string>
    quantityById: any
}

const initialState = {
    addedIds: [],
    quantityById: {}
} as InterInitialState

// reducer
const addedIds = (state = initialState.addedIds, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state
            }
            return [...state, action.produ]

        default:
            return state
    }
}

const quantityById = (state = initialState.quantityById, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId } = action
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            }
        default:
            return state
    }
}

export const getAddedIds = (state: any) => state.addedIds
export const getQuantity = (state:any, productId:string) =>
  state.quantityById[productId] || 0

const cart = (state = initialState, action: any) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
          return initialState
        case CHECKOUT_FAILURE:
          return action.cart
        default:
          return {
            addedIds: addedIds(state.addedIds, action),
            quantityById: quantityById(state.quantityById, action)
          }
      }
}
export default cart