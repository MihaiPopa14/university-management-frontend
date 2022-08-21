import * as studentActions from './actions';

import { addStudentFy, deleteStudentFy, fetchStudents } from './apiCalls';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { Student } from '../../types/Student';

function* getStudents() {
  try {
    const response: Array<Student> = yield call(fetchStudents);
    yield put(studentActions.getStudentsSuccess(response));
  } catch (error) {
    yield put(studentActions.getStudentsFailed());
  }
}

function* addStudent(action: { type: string; payload: Student }) {
  try {
    const response: Student = yield call(addStudentFy, action.payload);
    yield put(studentActions.addStudentsSuccess(response));
  } catch (error) {
    yield put(studentActions.addStudentsFailed());
  }
}

function* deleteStudent(action: { type: string; payload: string }) {
  try {
    const response: string = yield call(deleteStudentFy, action.payload);
    yield put(studentActions.deleteStudentSuccess(response));
  } catch (error) {
    yield put(studentActions.deleteStudentFailed());
  }
}

//Watch all the actions related to student

function* watchStudentSaga() {
  yield takeLatest(studentActions.getStudents, getStudents);
  yield takeLatest(studentActions.addStudent, addStudent);
  yield takeLatest(studentActions.deleteStudent, deleteStudent);
}

export default function* studentSaga() {
  yield all([fork(watchStudentSaga)]);
}
