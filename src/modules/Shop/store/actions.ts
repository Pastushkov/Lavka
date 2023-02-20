import { shopTypes } from "./actionTypes";
import { FetchSoapById } from "./types";

export const FetchShopListAction = () => ({
  type: shopTypes.FETCH_LIST,
});

export const FetchSoapByIdAction = (
  payload: FetchSoapById["payload"]
): FetchSoapById => ({
  type: shopTypes.FETCH_BY_ID,
  payload,
});
