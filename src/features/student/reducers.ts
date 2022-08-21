import * as actions from './actions';

import { Student } from '../../types/Student';
import { createReducer } from '@reduxjs/toolkit';

type studentInitialState = {
  students: Array<Student>;
  isLoading: boolean;
};

const initialState: studentInitialState = {
  students: [],
  isLoading: false
};

const studentsReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.getStudents, state => {
      state.isLoading = true;
    })
    .addCase(actions.getStudentsSuccess, (state, action) => {
      state.isLoading = false;
      state.students = action.payload;
    })
    .addCase(actions.getStudentsFailed, state => {
      state.isLoading = false;
    })
    .addCase(actions.addStudent, state => {
      state.isLoading = true;
    })
    .addCase(actions.addStudentsSuccess, (state, action) => {
      state.isLoading = false;
      state.students.unshift(action.payload);
    })
    .addCase(actions.addStudentsFailed, state => {
      state.isLoading = false;
    })
    .addCase(actions.deleteStudent, state => {
      state.isLoading = true;
    })
    .addCase(actions.deleteStudentSuccess, (state, action) => {
      state.isLoading = false;
      state.students = state.students.filter(item => item._id !== action.payload);
    })
    .addCase(actions.deleteStudentFailed, state => {
      state.isLoading = false;
    })

    .addDefaultCase((state, action) => {});
});

export default studentsReducer;
