// 用来合并所有的小reducer
import { combineReducers } from "redux";

import cityReducer from "../pages/city/store/reducer";

const rootReducer = combineReducers({
  city: cityReducer,
});

export default rootReducer;
