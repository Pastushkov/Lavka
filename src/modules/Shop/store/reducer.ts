import { IShopState, ShopActions } from "./types";
import { shopTypes } from "./actionTypes";

const initialState: IShopState = {
  list: null,
  isErrorList: "",
  isLoadingList: false,

  selectedSoap: null,
  isLoadingSelectedSoap: false,
  isErrorSelectedSoap: "",
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
        isLoadingSelectedSoap: true,
      };
    case shopTypes.SET_BY_ID:
      return {
        ...state,
        selectedSoap: action.payload,
        isLoadingSelectedSoap: false
      };
    case shopTypes.ERROR_BY_ID:
      return {
        ...state,
        isErrorSelectedSoap: action.payload,
        isLoadingSelectedSoap: false
      };

    default:
      return {
        ...state,
      };
  }
};
