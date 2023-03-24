
import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects'
import goodsSaga from '../../modules/Goods/store/saga'

export function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
    yield all([
        fork(goodsSaga),
    ])
}
