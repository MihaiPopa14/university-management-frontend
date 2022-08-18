import { all, fork } from 'redux-saga/effects';

import StudentsSaga from '../features/student/sagas';

export default function* rootSaga() {
  yield all([fork(StudentsSaga)]);
}
