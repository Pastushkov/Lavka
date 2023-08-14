import { AxiosResponse } from 'axios'
import {
    all,
    call,
    put,
    takeLatest,
    AllEffect,
    ForkEffect,
} from 'redux-saga/effects'
import { messageTypes } from 'components/messages/store/actionTypes'
import { FetchProductList } from './types'
import { productsTypes } from './actionTypes'
import { getProductsList } from '../api/products.api'

function* fetchProductsList({ payload }: FetchProductList) {
    try {
        const response: AxiosResponse = yield call(getProductsList, payload)
        if (response.data) {
            yield put({
                type: productsTypes.SET_PRODUCT_LIST,
                payload: response.data.payload,
            })
            yield put({
                type: messageTypes.SET_MESSAGE_TOAST,
                payload: {
                    message: 'Profile info updated',
                    type: 'success',
                },
            })
        }
    } catch (e: any) {
        yield put({
            type: messageTypes.SET_MESSAGE_TOAST,
            payload: {
                message: e?.response?.data?.error?.error || 'Error',
                type: 'error',
            },
        })
        // error
    }
}

function* productsSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
    yield all([
        takeLatest(productsTypes.FETCH_PRODUCT_LIST, fetchProductsList),
    ])
}

export default productsSaga
