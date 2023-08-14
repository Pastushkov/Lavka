import { userTypes } from './actionTypes'
import { fetchUpdateUserData, fetchUserData } from './types'

export const fetchUserDataAction = (): fetchUserData => ({
    type: userTypes.FETCH_USER_DATA,
})

export const fetchUpdateUserDataAction = (
    payload: fetchUpdateUserData['payload'],
): fetchUpdateUserData => ({
    type: userTypes.FETCH_UPDATE_USER_DATA,
    payload,
})
