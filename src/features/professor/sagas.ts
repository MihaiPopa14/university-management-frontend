import * as professorActions from './actions';

import { addProfessorFy, fetchProfessors } from './apiCalls';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { Professor } from '../../types/Professor';

function* getProfessors() {
  try {
    const response: Array<Professor> = yield call(fetchProfessors);
    yield put(professorActions.getProfessorsSuccess(response));
  } catch (error) {
    yield put(professorActions.getProfessorsFailed());
  }
}

function* addProfessor(action: { type: string; payload: Professor }) {
  try {
    const response: Professor = yield call(addProfessorFy, action.payload);
    yield put(professorActions.addProfessorSuccess(response));
  } catch (error) {
    yield put(professorActions.addProfessorFailed());
  }
}

//Watch all the actions related to Professor

function* watchProfessorSaga() {
  yield takeLatest(professorActions.getProfessors, getProfessors);
  yield takeLatest(professorActions.addProfessor, addProfessor);
}

export default function* professorSaga() {
  yield all([fork(watchProfessorSaga)]);
}
