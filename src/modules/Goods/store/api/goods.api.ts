import { AxiosResponse } from "axios";
import axiosInstance from "../../../../services/axiosInstance";
import { FetchSoapList, FetchItemById } from "../types";

const soapUrl = "/prom/products";

export const getSoapList = (
  lastId
    : FetchSoapList['payload']): Promise<AxiosResponse<FetchSoapList>> =>
  axiosInstance.get(`${soapUrl}/list?limit=10${lastId ? `&last_id=${lastId}` : ``}`);

export const getSoapById = ({
  id,
}: FetchItemById["payload"]): Promise<AxiosResponse<FetchItemById>> => 
  axiosInstance.get(`${soapUrl}/${id}`);
