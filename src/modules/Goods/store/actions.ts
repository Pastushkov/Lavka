import { shopTypes } from "./actionTypes";
import {
  FetchItemById,
  FetchSoapList,
  FetchUpdateTranslation,
} from "./types";

export const fetchShopListAction = (
  payload: FetchSoapList["payload"]
): FetchSoapList => ({
  type: shopTypes.FETCH_LIST,
  payload,
});

export const fetchItemByIdAction = (
  payload: FetchItemById["payload"]
): FetchItemById => ({
  type: shopTypes.FETCH_BY_ID,
  payload,
});

export const fetchUpdateTranslationAction = (
  payload: FetchUpdateTranslation["payload"]
): FetchUpdateTranslation => ({
  type: shopTypes.FETCH_UPDATE_TRANSLATION,
  payload,
});
