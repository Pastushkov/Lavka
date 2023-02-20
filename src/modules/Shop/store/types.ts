import { shopTypes } from "./actionTypes"

export interface IShopState {
    list: IItem[] | null
    isLoadingList: boolean,
    isErrorList: string
    selectedSoap: IItem | null
    isLoadingSelectedSoap: boolean
    isErrorSelectedSoap: string
}

export interface IItem {
    _id: string
    name: string
    price: number
    description: string
    count: number
    image: string
    colors: {
        [key:string]: string
    }
}

export interface FetchSoapList {
    type: typeof shopTypes.FETCH_LIST
}

export interface SetSoapList {
    type: typeof shopTypes.SET_LIST
    payload: IItem[]
}

export interface ErrorSoapList {
    type: typeof shopTypes.ERROR_LIST
    payload: string
}

export interface FetchSoapById {
    type: typeof shopTypes.FETCH_BY_ID
    payload: {
        id:string
    }
}

export interface SetSoapById {
    type: typeof shopTypes.SET_BY_ID
    payload: IItem
}

export interface ErrorSoapById {
    type: typeof shopTypes.ERROR_BY_ID
    payload: string
}

export type ShopActions  = 
| FetchSoapList
| SetSoapList
| ErrorSoapList
| FetchSoapById
| SetSoapById
| ErrorSoapById