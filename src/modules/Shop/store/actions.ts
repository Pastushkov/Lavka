import { shopTypes } from "./actionTypes";
import { FetchItemById, FetchSoapList } from "./types";

export const fetchShopListAction = (
  payload: FetchSoapList['payload']
):FetchSoapList => ({
  type: shopTypes.FETCH_LIST,
  payload
});

export const fetchItemByIdAction = (
  payload: FetchItemById["payload"]
): FetchItemById => ({
  type: shopTypes.FETCH_BY_ID,
  payload,
});
