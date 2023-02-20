import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

interface IUser {
    firstName: string
    lastName: string
    email: string
}

const ONE_SECOND_IN_MILLISECONDS = 1000

export const setToken: (token: string) => void = (token: string) => {
    try {
        const { exp } = jwtDecode<{ exp: number }>(token)
        Cookies.set('token', JSON.stringify(token), {
            expires: new Date(exp * ONE_SECOND_IN_MILLISECONDS),
        })
    } catch (e) {
        console.error(e)
    }
}

export const getCookiesRefreshToken: () => string = () => {
    const user = JSON.parse(Cookies.get('user') || '{}')
    return user?.refreshToken
}

export const getCookiesAccessToken: () => string | undefined = () => {
    const token = JSON.parse(Cookies.get('token') || '""')
    if (!token) return undefined
    return token
}

export const updateCookiesAccessToken: (token: string) => void = (token: string) => {
    const user = JSON.parse(Cookies.get('user') || '{}')
    user.accessToken = token
    Cookies.set('user', JSON.stringify(user))
}

export const getUser: () => void = () => JSON.parse(Cookies.get('user') || '{}')

export const setUser: (user: IUser) => void = (user: IUser) => {
    Cookies.set('user', JSON.stringify(user))
}

export const removeUser: () => void = () => {
    Cookies.remove('user')
}

export const removeToken: () => void = () => {
    Cookies.remove('token')
}
