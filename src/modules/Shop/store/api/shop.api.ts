import { AxiosResponse } from "axios";
import axiosInstance from "../../../../services/axiosInstance";
import { FetchSoapList, FetchSoapById } from "../types";

const soapUrl = "/prom/products/list";

export const getSoapList = (
  last_id
    : FetchSoapList['payload']): Promise<AxiosResponse<FetchSoapList>> =>
  axiosInstance.get(`${soapUrl}?limit=10${last_id ? `&last_id=${last_id}` : ``}`);

export const getSoapById = ({
  id,
}: FetchSoapById["payload"]): Promise<AxiosResponse<FetchSoapById>> =>
  axiosInstance.get(`${soapUrl}/${id}`);
