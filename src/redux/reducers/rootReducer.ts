import { combineReducers } from "redux";
import goodsReducer from "../../modules/Goods/store/reducer";

const rootReducer = combineReducers({
  goods: goodsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
