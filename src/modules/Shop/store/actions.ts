import { shopTypes } from "./actionTypes";
import { FetchSoapById, FetchSoapList } from "./types";

export const FetchShopListAction = (
  payload: FetchSoapList['payload']
):FetchSoapList => ({
  type: shopTypes.FETCH_LIST,
  payload
});

export const FetchSoapByIdAction = (
  payload: FetchSoapById["payload"]
): FetchSoapById => ({
  type: shopTypes.FETCH_BY_ID,
  payload,
});
