import { productsTypes } from './actionTypes'

export interface IQuery {
    limit?: string
    lastId?: string
}

export interface ProductsState {
    isLaoding: boolean
    list: IProduct[] | null
    total: number
}

export interface IProduct {
    [key: string]: any
    id: number
    category: {
        caption: string
        id: number
    }
    currency: string
    date_modified: string
    description: string
    description_multilang: {
        [key: string]: string
    }
    discount: {
        date_end: string
        date_start: string
        type: string
        value: number
    }
    external_id: number | string | null
    group: {
        id: number
        name: string
        name_multilang: {
            [key: string]: string
        }
    }
    images: {
        id: number
        thumbnail_url: string
        url: string
    }[]
    in_stock: boolean
    is_variation: boolean
    keywords: string
    main_image: string
    measure_unit: string
    minimum_order_quantity: null | number | string
    name: string
    name_multilang: {
        [key: string]: string
    }
    presence: string
    price: number
    prices: any[]
    quantity_in_stock: null | number | string
    regions: any[]
    selling_type: string
    sku: string
    status: string
    variation_base_id: null | string | number
    variation_group_id: null | string | number
}

export interface FetchProductList {
    type: typeof productsTypes.FETCH_PRODUCT_LIST
    payload: {
        lastId?: string
        limit?: string
    }
}
export interface SetProductList {
    type: typeof productsTypes.SET_PRODUCT_LIST
    payload: {
        list: IProduct[]
        total: number
    }
}
export type ProductActions = FetchProductList | SetProductList
