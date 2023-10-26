/* eslint-disable require-yield */
import _ from "lodash";
import { put, select } from "redux-saga/effects";

export function* handleError(error) {
  console.log(error);
}
