import { productsTypes } from './actionTypes'
import { FetchProductList } from './types'

export const fetchProductsListAction = (
    payload: FetchProductList['payload'],
): FetchProductList => ({
    type: productsTypes.FETCH_PRODUCT_LIST,
    payload,
})
