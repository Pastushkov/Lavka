import { AxiosResponse } from "axios";
import {
    all,
    put,
    takeLatest,
    AllEffect,
    ForkEffect,
    call,
} from "redux-saga/effects";
import { shopTypes } from "./actionTypes";
import { getSoapList, getSoapById } from "./api/shop.api";
import { IItem, FetchSoapById } from "./types";

function* fetchSoapListSaga({payload}:any) {
    try {
        console.log(payload);
        const {last_id} = payload
        
        const response: AxiosResponse<{ payload: IItem[] }> = yield call(
            getSoapList,
            last_id
        );
        if (response.data) {
            yield put({
                type: shopTypes.SET_LIST,
                payload: response.data.payload,
            });
        }
    } catch (error: any) {
        console.log(error);
        
        yield put({
            type: shopTypes.ERROR_LIST,
            payload: error?.response?.data?.error?.message ?? 'Something went wrong',
        });
    }
}

function* fetchSoapByIdSaga({ payload }: any) {
    try {
        const { id } = payload
        const response: AxiosResponse<{ payload: IItem }> = yield call(
            getSoapById,
            id
        );
        if (response.data) {
            yield put({
                type: shopTypes.SET_BY_ID,
                payload: response.data.payload,
            });
        }
    } catch (error: any) {
        yield put({
            type: shopTypes.ERROR_BY_ID,
            payload: error?.response?.data?.error?.message ?? 'Something went wrong',
        });
    }
}

function* shopSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
    yield all([
        takeLatest(shopTypes.FETCH_LIST, fetchSoapListSaga),
        takeLatest(shopTypes.FETCH_BY_ID, fetchSoapByIdSaga),
    ])
}

export default shopSaga