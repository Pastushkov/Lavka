import axios from 'axios'
import { apiEncode } from '../utils/apiEncode'
import { getCookiesAccessToken } from '../utils/token'

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': '*',
    },
})

axiosInstance.interceptors.request.use(
    config => {
        const token = getCookiesAccessToken()
        if (config.headers && token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        config.url = apiEncode(config.url)

        if (config.baseURL) {
            config.baseURL = `${process.env.REACT_APP_API_URL}${config.baseURL}`
        } else {
            config.baseURL = `${process.env.REACT_APP_API_URL}`
        }

        return config
    },
    error => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
    config => config,
    error => {        
        return Promise.reject(error)
    },
)

export default axiosInstance
