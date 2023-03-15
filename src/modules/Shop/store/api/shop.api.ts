import { AxiosResponse } from "axios";
import axiosInstance from "../../../../services/axiosInstance";
import { FetchSoapList, FetchItemById } from "../types";

const soapUrl = "/prom/products";

export const getSoapList = (
  last_id
    : FetchSoapList['payload']): Promise<AxiosResponse<FetchSoapList>> =>
  axiosInstance.get(`${soapUrl}/list?limit=10${last_id ? `&last_id=${last_id}` : ``}`);

export const getSoapById = ({
  id,
}: FetchItemById["payload"]): Promise<AxiosResponse<FetchItemById>> => 
  axiosInstance.get(`${soapUrl}/${id}`);
