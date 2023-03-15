import { shopTypes } from "./actionTypes"

export interface IShopState {
    list: IItem[] | null
    isLoadingList: boolean,
    isErrorList: string    

    selectedItem: IItem | null
    isLoadingSelectedItem: boolean
    isErrorSelectedItem: string
}

export interface IItem {
    id: number
    price: number
    main_image: string
    name: string
    name_multilang: {
        uk: string
    }
    images:
    {
        id: number
        url: string
    }[]
    category: {
        id: number
        caption: string
    }
    group: {
        id:number
        name:string
    }
    keywords: string
    currency: string
    description_multilang: {
        uk: string
    }
}

export interface FetchSoapList {
    type: typeof shopTypes.FETCH_LIST
    payload: {
        last_id: number|string | null
    }
}

export interface SetSoapList {
    type: typeof shopTypes.SET_LIST
    payload: IItem[]
}

export interface ErrorSoapList {
    type: typeof shopTypes.ERROR_LIST
    payload: string
}

export interface FetchItemById {
    type: typeof shopTypes.FETCH_BY_ID
    payload: {
        id: string
    }
}

export interface SetItemById {
    type: typeof shopTypes.SET_BY_ID
    payload: IItem
}

export interface ErrorItemById {
    type: typeof shopTypes.ERROR_BY_ID
    payload: string
}

export type ShopActions =
    | FetchSoapList
    | SetSoapList
    | ErrorSoapList
    | FetchItemById
    | SetItemById
    | ErrorItemById