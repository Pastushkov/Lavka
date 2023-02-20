import { combineReducers } from "redux";
import shopReducer from "../../modules/Shop/store/reducer";
const rootReducer = combineReducers({
  shop: shopReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
