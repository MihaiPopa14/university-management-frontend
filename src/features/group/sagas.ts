import * as groupActions from './actions';

import { addGroupFy, deleteGroupFy, fetchGroups } from './apiCalls';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { Group } from '../../types/Group';

function* getGroups() {
  try {
    const response: Array<Group> = yield call(fetchGroups);
    yield put(groupActions.getGroupsSuccess(response));
  } catch (error) {
    yield put(groupActions.getGroupsFailed());
  }
}

function* addGroup(action: { type: string; payload: Group }) {
  try {
    const response: Group = yield call(addGroupFy, action.payload);
    yield put(groupActions.addGroupSuccess(response));
  } catch (error) {
    yield put(groupActions.addGroupFailed());
  }
}

function* deleteGroup(action: { type: string; payload: string }) {
  try {
    const response: string = yield call(deleteGroupFy, action.payload);
    yield put(groupActions.deleteGroupSuccess(response));
  } catch (error) {
    yield put(groupActions.deleteGroupFailed());
  }
}

//Watch all the actions related to group

function* watchGroupSaga() {
  yield takeLatest(groupActions.getGroups, getGroups);
  yield takeLatest(groupActions.addGroup, addGroup);
  yield takeLatest(groupActions.deleteGroup, deleteGroup);
}

export default function* groupSaga() {
  yield all([fork(watchGroupSaga)]);
}
