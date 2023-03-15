/* eslint-disable import/no-anonymous-default-export */
import { IShopState, ShopActions } from "./types";
import { shopTypes } from "./actionTypes";

const initialState: IShopState = {
  list: null,
  isErrorList: "",
  isLoadingList: false,

  selectedItem: null,
  isLoadingSelectedItem: false,
  isErrorSelectedItem: "",
};

export default (state = initialState, action: ShopActions): IShopState => {
  switch (action.type) {
    case shopTypes.FETCH_LIST:
      return {
        ...state,
        isLoadingList: true,
      };
    case shopTypes.SET_LIST:
      return {
        ...state,
        list: action.payload,
        isLoadingList: false
      };
    case shopTypes.ERROR_LIST:
      return {
        ...state,
        isErrorList: action.payload,
        isLoadingList: false
      };

    case shopTypes.FETCH_BY_ID:
      return {
        ...state,
        isLoadingSelectedItem: true,
      };
    case shopTypes.SET_BY_ID:
      return {
        ...state,
        selectedItem: action.payload,
        isLoadingSelectedItem: false
      };
    case shopTypes.ERROR_BY_ID:
      return {
        ...state,
        isErrorSelectedItem: action.payload,
        isLoadingSelectedItem: false
      };

    default:
      return {
        ...state,
      };
  }
};
