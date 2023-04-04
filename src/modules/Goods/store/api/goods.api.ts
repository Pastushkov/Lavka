import { AxiosResponse } from "axios";
import { FetchUpdateTranslation, FetchSoapList, FetchItemById } from "../types";
import axiosInstance from "../../../../services/axiosInstance";

const soapUrl = "/prom/products";
const translationUrl = "/translation";

export const getSoapList = (lastId: FetchSoapList["payload"]): Promise<AxiosResponse<FetchSoapList>> =>
  axiosInstance.get(`${soapUrl}/list?limit=10${lastId ? `&last_id=${lastId}` : ``}`);

export const getSoapById = ({ id }: FetchItemById["payload"]): Promise<AxiosResponse<FetchItemById>> =>
  axiosInstance.get(`${soapUrl}/${id}`);

export const updateTranslation = (body: any): Promise<AxiosResponse<FetchUpdateTranslation>> =>
  axiosInstance.put(`${soapUrl}${translationUrl}`, { ...body });
