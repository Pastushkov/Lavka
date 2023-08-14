import { userTypes } from './actionTypes'

export interface UserState {
    isLoading: boolean
    user: IUser | null
}

export interface IUser {
    email: string | null
    promToken: string | null
    name: string | null
    phone: string | null
}

export interface fetchUserData {
    type: typeof userTypes.FETCH_USER_DATA
}
export interface setUserData {
    type: typeof userTypes.SET_USER_DATA
    payload: IUser
}

export interface fetchUpdateUserData{
    type: typeof userTypes.FETCH_UPDATE_USER_DATA,
    payload: IUser
}

export type UserActions = fetchUserData | setUserData | fetchUpdateUserData
