import { takeLatest, put, call } from "redux-saga/effects";
import { userLogin, userSign } from "../slice/slice";
import { makePostReq } from "../../utils/request-utils";
import request from "../../utils/request";

function* loginUserHandler(action) {
  console.log(action.payload);

  try {
    const url = "http://reactor.ttweb.net:8080/api/auth/login-json";

    const response = yield call(request, url, makePostReq(action.payload));
    console.log(response);

    yield put(userLogin(response));
  } catch (err) {
    //  yield handleApiError(e);
    yield console.log("error xad " + err);
  }
}

export function* fetchData() {
  yield takeLatest(userSign.type, loginUserHandler);
}
