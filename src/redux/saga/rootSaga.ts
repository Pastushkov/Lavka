
import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects'
import shopSaga from '../../modules/Shop/store/saga'

export function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
    yield all([
        fork(shopSaga),
    ])
}
