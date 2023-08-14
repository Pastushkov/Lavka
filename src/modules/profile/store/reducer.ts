import { userTypes } from './actionTypes'
import { UserState, UserActions } from './types'

const initialState: UserState = {
    isLoading: false,
    user: null,
}

export default (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case userTypes.FETCH_USER_DATA:
            return {
                ...state,
                isLoading: true,
            }
        case userTypes.SET_USER_DATA:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
        case userTypes.FETCH_UPDATE_USER_DATA:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {
                ...state,
            }
    }
}
