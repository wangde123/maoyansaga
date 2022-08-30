// 就是用来代替actionCreator.js的
import { takeEvery, put, call } from "redux-saga/effects";
import { ratedApi } from "../../../utils/api";

function* addAction() {
  // put相当于组件的dispatch
  yield put({ type: "add" });
}

function* minusAction() {
  yield put({ type: "minus" });
}

function* loadAction() {
  // 请求数据，并且将数据给reducer
  // call方法用来请求数据
  const res = yield call(ratedApi);
  // console.log(res);
  yield put({
    type: "load",
    payload: res.result,
  });
}

function* mySaga() {
  console.log("mySaga");
  // 用于监听组件调的dispach
  yield takeEvery("addaction", addAction);
  yield takeEvery("minusaction", minusAction);
  yield takeEvery("loadaction", loadAction);
}

export default mySaga;
