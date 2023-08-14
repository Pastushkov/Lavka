import { AxiosResponse } from 'axios'
import axiosInstance from 'services/axiosInstance'
import { IUser, fetchUpdateUserData } from '../store/types'

const USER_URL = '/users/me'

export const getUser = (): Promise<AxiosResponse<IUser>> =>
    axiosInstance.get(`${USER_URL}`)

export const updateUserData = (
    body: fetchUpdateUserData['payload'],
): Promise<AxiosResponse<IUser>> => axiosInstance.patch(`${USER_URL}`, body)
