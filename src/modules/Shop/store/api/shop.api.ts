import { AxiosResponse } from "axios";
import axiosInstance from "../../../../services/axiosInstance";
import { FetchSoapList, FetchSoapById } from "../types";

const soapUrl = "/soap";

export const getSoapList = (): Promise<AxiosResponse<FetchSoapList>> =>
  axiosInstance.get(`${soapUrl}`);

export const getSoapById = ({
  id,
}: FetchSoapById["payload"]): Promise<AxiosResponse<FetchSoapById>> =>
  axiosInstance.get(`${soapUrl}/${id}`);
