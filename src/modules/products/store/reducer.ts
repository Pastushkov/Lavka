import { productsTypes } from './actionTypes'
import { ProductsState, ProductActions } from './types'

const initialState: ProductsState = {
    isLaoding: false,
    list: null,
    total: 0
}

export default (
    state = initialState,
    action: ProductActions,
): ProductsState => {
    switch (action.type) {
        case productsTypes.FETCH_PRODUCT_LIST:
            return {
                ...state,
                isLaoding: true,
            }
        case productsTypes.SET_PRODUCT_LIST:
            return {
                ...state,
                isLaoding: false,
                list: action.payload.list,
                total: action.payload.total
            }
        default:
            return {
                ...state,
            }
    }
}
