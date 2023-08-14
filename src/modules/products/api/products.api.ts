import { AxiosResponse } from 'axios'
import axiosInstance from 'services/axiosInstance'
import { FetchProductList, IQuery } from '../store/types'

const PRODUCTS_URL = '/prom/products'
const LIST_URL = '/list'

const createQuery = ({ limit, lastId }: IQuery): string => {
    let query = [] as string[]
    if (limit) query = [...query, `?limit=${limit}`]
    if (lastId) query = [...query, `last_id=${lastId}`]
    return query.length ? `${query.join('&')}` : ''
}

export const getProductsList = ({
    limit,
    lastId,
}: FetchProductList['payload']): Promise<AxiosResponse<any>> =>
    axiosInstance.get(
        `${PRODUCTS_URL}${LIST_URL}${createQuery({ limit, lastId })}`,
    )
