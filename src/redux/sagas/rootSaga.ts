import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects'
import authorizationSaga from 'modules/auth/store/saga'
import usersSaga from 'modules/profile/store/saga'
import productsSaga from 'modules/products/store/saga'

export function* rootSaga(): Generator<
    AllEffect<ForkEffect<void>>,
    void,
    unknown
> {
    yield all([fork(authorizationSaga), fork(usersSaga), fork(productsSaga)])
}
