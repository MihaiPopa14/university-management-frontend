import { Student } from '../../types/Student';
import { createAction } from '@reduxjs/toolkit';

export const getStudents = createAction('getStudents');

export const getStudentsSuccess = createAction<Array<Student>>('getStudentsSuccess');
export const getStudentsFailed = createAction('getStudentsFailed');

export const addStudent = createAction<Student>('addStudent');

export const addStudentsSuccess = createAction<Student>('addStudentsSuccess');
export const addStudentsFailed = createAction('addStudentsFailed');

export const deleteStudent = createAction<string | undefined>('deleteStudent');

export const deleteStudentSuccess = createAction<string>('deleteStudentSuccess');
export const deleteStudentFailed = createAction('deleteStudentFailed');

export const editStudent = createAction<Student>('editStudent');

export const editStudentSuccess = createAction<Student>('editStudentSuccess');
export const editStudentFailed = createAction('editStudentFailed');
