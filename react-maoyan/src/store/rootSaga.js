// rootSaga是需要将所有的小saga汇总起来
import { all } from "redux-saga/effects";

import citySaga from "../pages/city/store/sagas";

function* rootSaga() {
  yield all([citySaga()]);
}

export default rootSaga;
