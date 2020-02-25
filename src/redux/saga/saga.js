import { takeLatest, put } from "redux-saga/effects";
import { userLogin, user_login } from "../slice/slice";

function* loginUserHandler() {
  try {
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    let result = "";
    yield fetch(url)
      .then(response => {
        return response.json();
      })
      .then(res => {
        result = res;
      })
      .catch(err => {
        console.log(err);
      });

    yield put(userLogin(result));
  } catch (err) {
    yield console.log(err);
  }
}

export function* fetchData() {
  yield takeLatest(user_login.type, loginUserHandler);
}
