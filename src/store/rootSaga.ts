import { all, fork } from 'redux-saga/effects';

import CourseSaga from '../features/course/sagas';
import GroupSaga from '../features/group/sagas';
import ProfessorSaga from '../features/professor/sagas';
import StudentsSaga from '../features/student/sagas';

export default function* rootSaga() {
  yield all([fork(StudentsSaga), fork(GroupSaga), fork(CourseSaga), fork(ProfessorSaga)]);
}
