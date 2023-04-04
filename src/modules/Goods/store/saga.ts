import { AxiosResponse } from "axios";
import { all, put, takeLatest, AllEffect, ForkEffect, call } from "redux-saga/effects";
import { shopTypes } from "./actionTypes";
import { getSoapList, getSoapById, updateTranslation } from "./api/goods.api";
import { IItem } from "./types";

function* fetchSoapListSaga({ payload }: any) {
  try {
    const { lastId } = payload;

    const response: AxiosResponse<{ payload: IItem[] }> = yield call(getSoapList, lastId);
    if (response.data) {
      const parsed = response.data.payload.map((item: any) => ({
        ...item,
        lastId: item.last_id,
        descriptionMultilang: item.description_multilang,
        mainImage: item.main_image,
        nameMultilang: item.name_multilang
      }));

      yield put({
        type: shopTypes.SET_LIST,
        payload: parsed
      });
    }
  } catch (error: any) {
    console.log(error);

    yield put({
      type: shopTypes.ERROR_LIST,
      payload: error?.response?.data?.error?.message ?? "Something went wrong"
    });
  }
}

function* fetchSoapByIdSaga({ payload }: any) {
  try {
    const response: AxiosResponse<{ payload: IItem }> = yield call(getSoapById, payload);
    if (response.data) {
      const parsed = {
        ...response.data.payload,
        lastId: response.data.payload.last_id,
        descriptionMultilang: response.data.payload.description_multilang,
        mainImage: response.data.payload.main_image,
        nameMultilang: response.data.payload.name_multilang
      };

      yield put({
        type: shopTypes.SET_BY_ID,
        payload: parsed
      });
    }
  } catch (error: any) {
    yield put({
      type: shopTypes.ERROR_BY_ID,
      payload: error?.response?.data?.error?.message ?? "Something went wrong"
    });
  }
}

function* fetchUpdateTranslationSaga({ payload }: any) {
  try {
    console.log(payload);
    
    const response: AxiosResponse<{ payload: any }> = yield call(updateTranslation, payload);
    console.log(response);
  } catch (error: any) {
    yield put({
      type: shopTypes.ERROR_UPDATE_TRANSLATION,
      payload: error?.response?.data?.error?.message ?? "Something went wrong"
    });
  }
}

function* shopSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([
    takeLatest(shopTypes.FETCH_LIST, fetchSoapListSaga),
    takeLatest(shopTypes.FETCH_BY_ID, fetchSoapByIdSaga),
    takeLatest(shopTypes.FETCH_UPDATE_TRANSLATION, fetchUpdateTranslationSaga)
  ]);
}

export default shopSaga;
