import { shopTypes } from "./actionTypes";

export interface IShopState {
  list: IItem[] | null;
  isLoadingList: boolean;
  isErrorList: string;

  selectedItem: IItem | null;
  isLoadingSelectedItem: boolean;
  isErrorSelectedItem: string;

  isLoadingUpdateTranslation: boolean;
  translationUpdated: string | any;
}

export interface IItem {
  [x: string]: any;
  id: number;
  price: number;
  mainImage: string;
  name: string;
  nameMultilang: {
    uk: string;
    ru: string;
  };
  images: {
    id: number;
    url: string;
  }[];
  category: {
    id: number;
    caption: string;
  };
  group: {
    id: number;
    name: string;
  };
  keywords: string;
  currency: string;
  descriptionMultilang: {
    uk: string;
    ru: string;
  };
  quantity_in_stock: string | number;
}

export interface IUpdateProduct {
  id: number;
  presence: string;
  in_stock: boolean;
  regions: [];
  price: number;
  status: string;
  discount: null;
  name: string;
  keywords: string;
  description: string;
  quantity_in_stock: number;
}

export interface FetchUpdateProduct {
  type: typeof shopTypes.FETCH_UPDATE_PRODUCT;
  payload: IUpdateProduct;
}

export interface FetchSoapList {
  type: typeof shopTypes.FETCH_LIST;
  payload: {
    lastId: number | string | null;
  };
}

export interface SetSoapList {
  type: typeof shopTypes.SET_LIST;
  payload: IItem[];
}

export interface ErrorSoapList {
  type: typeof shopTypes.ERROR_LIST;
  payload: string;
}

export interface FetchItemById {
  type: typeof shopTypes.FETCH_BY_ID;
  payload: {
    id: string;
  };
}

export interface SetItemById {
  type: typeof shopTypes.SET_BY_ID;
  payload: IItem;
}

export interface ErrorItemById {
  type: typeof shopTypes.ERROR_BY_ID;
  payload: string;
}

export interface FetchUpdateTranslation {
  type: typeof shopTypes.FETCH_UPDATE_TRANSLATION;
  payload: {
    product_id: string;
    lang: string;
    name: string;
    keywords: string;
    description: string;
  };
}

export interface SetUpdateTranslation {
  type: typeof shopTypes.SET_UPDATE_TRANSLATION;
  payload: string;
}

export interface ErrorUpdateTranslation {
  type: typeof shopTypes.ERROR_UPDATE_TRANSLATION;
  payload: string;
}

export type ShopActions =
  | FetchSoapList
  | SetSoapList
  | ErrorSoapList
  | FetchItemById
  | SetItemById
  | ErrorItemById
  | FetchUpdateTranslation
  | SetUpdateTranslation
  | ErrorUpdateTranslation;
