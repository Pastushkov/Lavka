import { combineReducers } from 'redux'
import authorizationReducer from 'modules/auth/store/reducer'
import messageReducer from 'components/messages/store/reducer'
import userReducer from 'modules/profile/store/reducer'
import productsReducer from 'modules/products/store/reducer'

const rootReducer = combineReducers({
    authorization: authorizationReducer,
    messages: messageReducer,
    user: userReducer,
    products: productsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
