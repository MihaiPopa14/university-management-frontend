import { Student } from '../../types/Student';
import { createAction } from '@reduxjs/toolkit';

export const getStudents = createAction('getStudents');

export const getStudentsSuccess = createAction<Array<Student>>('getStudentsSuccess');
export const getStudentsFailed = createAction('getStudentsFailed');

export const addStudent = createAction<Student>('addStudent');

export const addStudentsSuccess = createAction<Student>('addStudentsSuccess');
export const addStudentsFailed = createAction('addStudentsFailed');
