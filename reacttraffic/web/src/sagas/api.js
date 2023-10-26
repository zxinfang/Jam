import { put, takeLatest, call, all } from "redux-saga/effects";
import {
  GET_API,
  GET_ClassList,
  POST_Login,
  POST_Register,
} from "../services/api";
import { setRole, removeRole, setId, removeId, setClass, removeClass } from "../utils/common";
import { handleError } from "../utils/error";
import history from "../utils/history";

function* GET_APIEffect({ payload, callback, loading }) {
  try {
    if (loading) loading(true);

    const Result = yield call(GET_API, payload);
    yield put({ type: "SAVE_API", payload: Result });

    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
    yield handleError(error);
  }
}

function* POST_LoginEffect({ payload, callback, loading }) {
  try {
    if (loading) loading(true);

    const response = yield call(POST_Login, payload);

    const role = response.role;
    const id = response.id;
    const className = response.className;
    yield setRole(role);
    yield setId(id);
    yield setClass(className);

    if (loading) loading(false);
    if (callback) callback(role);

  } catch (error) {
    if (loading) loading(false);
    yield handleError(error);
  }
}

function* POST_LogoutEffect({ callback, loading }) {
  try {
    if (loading) loading(true);

    removeRole();
    removeId();
    removeClass();

    history.push("/");
    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
    yield handleError(error);
  }
}

function* POST_RegisterEffect({ payload, callback, loading }) {
  try {
    if (loading) loading(true);

    yield call(POST_Register, payload);

    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
    yield handleError(error);
  }
}

function* GET_ClassListEffect({ callback, loading }) {
  try {
    if (loading) loading(true);

    const response = yield call(GET_ClassList);

    yield put({ type: "SAVE_ClassList", payload: response });

    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
    yield handleError(error);
  }
}


export default function* Example() {
  yield takeLatest("GET_API", GET_APIEffect);
  yield takeLatest("POST_Login", POST_LoginEffect);
  yield takeLatest("POST_Logout", POST_LogoutEffect);
  yield takeLatest("POST_Register", POST_RegisterEffect);
  yield takeLatest("GET_ClassList", GET_ClassListEffect);
}
