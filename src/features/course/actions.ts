import { Course } from '../../types/Course';
import { createAction } from '@reduxjs/toolkit';

export const getCourses = createAction('getCourses');

export const getCoursesSuccess = createAction<Array<Course>>('getCoursesSuccess');
export const getCoursesFailed = createAction('getCoursesFailed');

export const addCourse = createAction<Course>('addCourse');

export const addCourseSuccess = createAction<Course>('addCourseSuccess');
export const addCourseFailed = createAction('addCourseFailed');
