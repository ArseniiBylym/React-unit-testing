import {todosSagas} from './todos.sagas';
import {all} from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    ...todosSagas
  ])
}
