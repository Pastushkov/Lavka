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
import { userTypes } from './actionTypes'
import { getUser, updateUserData } from '../api/user.api'
import { fetchUpdateUserData } from './types'

function* fetchUserDataSaga() {
    try {
        const response: AxiosResponse = yield call(getUser)
        if (response.data) {
            yield put({
                type: userTypes.SET_USER_DATA,
                payload: response.data.payload,
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

function* fetchUpdateUserDataSaga({ payload }: fetchUpdateUserData) {
    try {
        const response: AxiosResponse = yield call(updateUserData, payload)
        if (response.data) {
            yield put({
                type: userTypes.SET_USER_DATA,
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

function* usersSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
    yield all([
        takeLatest(userTypes.FETCH_USER_DATA, fetchUserDataSaga),
        takeLatest(userTypes.FETCH_UPDATE_USER_DATA, fetchUpdateUserDataSaga),
    ])
}

export default usersSaga
