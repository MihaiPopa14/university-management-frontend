import * as courseActions from './actions';

import { addCourseFy, deleteCourseFy, fetchCourses } from './apiCalls';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { Course } from '../../types/Course';

function* getCourses() {
  try {
    const response: Array<Course> = yield call(fetchCourses);
    yield put(courseActions.getCoursesSuccess(response));
  } catch (error) {
    yield put(courseActions.getCoursesFailed());
  }
}

function* addCourse(action: { type: string; payload: Course }) {
  try {
    const response: Course = yield call(addCourseFy, action.payload);
    yield put(courseActions.addCourseSuccess(response));
  } catch (error) {
    yield put(courseActions.addCourseFailed());
  }
}

function* deleteCourse(action: { type: string; payload: string }) {
  try {
    const response: string = yield call(deleteCourseFy, action.payload);
    yield put(courseActions.deleteCourseSuccess(response));
  } catch (error) {
    yield put(courseActions.deleteCourseFailed());
  }
}

//Watch all the actions related to Course

function* watchCourseSaga() {
  yield takeLatest(courseActions.getCourses, getCourses);
  yield takeLatest(courseActions.addCourse, addCourse);
  yield takeLatest(courseActions.deleteCourse, deleteCourse);
}

export default function* courseSaga() {
  yield all([fork(watchCourseSaga)]);
}
