import { all } from "redux-saga/effects";

const sagas = ["global", "api"];
const Saga = sagas.map((saga) => require(`./${saga}`).default());

export default function* rootSaga() {
  yield all(Saga);
}
