import qs from "qs";
import { put, takeLatest, select } from "redux-saga/effects";
import history from "../utils/history";

function* INITIAL_Toast({ payload }) {
  yield put({ type: "SAVE_Toast", payload });
}

function* PUSH_GoToRoute({ path, payload, callback }) {
  const body = { pathname: path, search: qs.stringify(payload) };
  yield history.push(body);
  if (callback) callback();
}

function* CHANGE_WindowScreenSize({ payload: windowSize }) {
  const tabletWidth = 1350;
  const mobileWidth = 992;

  const isTablet = yield select((state) => state.global.isTablet);
  const isMobile = yield select((state) => state.global.isMobile);

  if (windowSize <= mobileWidth && isMobile !== true)
    yield put({ type: "SAVE_isMobile", payload: true });

  if (windowSize <= tabletWidth && isTablet !== true)
    yield put({ type: "SAVE_isTablet", payload: true });

  if (windowSize > mobileWidth && isMobile !== false)
    yield put({ type: "SAVE_isMobile", payload: false });

  if (windowSize > tabletWidth && isTablet !== false)
    yield put({ type: "SAVE_isTablet", payload: false });
}

export default function* Example() {
  yield takeLatest("INITIAL_Toast", INITIAL_Toast);
  yield takeLatest("PUSH_GoToRoute", PUSH_GoToRoute);
  yield takeLatest("CHANGE_WindowScreenSize", CHANGE_WindowScreenSize);
}
