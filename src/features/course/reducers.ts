import * as actions from './actions';

import { Course } from '../../types/Course';
import { createReducer } from '@reduxjs/toolkit';

type courseInitialState = {
  courses: Array<Course>;
  isLoading: boolean;
};

const initialState: courseInitialState = {
  courses: [],
  isLoading: false
};

const coursesReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.getCourses, state => {
      state.isLoading = true;
    })
    .addCase(actions.getCoursesSuccess, (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    })
    .addCase(actions.getCoursesFailed, state => {
      state.isLoading = false;
    })
    .addCase(actions.addCourse, state => {
      state.isLoading = true;
    })
    .addCase(actions.addCourseSuccess, (state, action) => {
      state.isLoading = false;
      state.courses.unshift(action.payload);
    })
    .addCase(actions.addCourseFailed, state => {
      state.isLoading = false;
    })
    // .addCase(actions.deleteGroup, state => {
    //   state.isLoading = true;
    // })
    // .addCase(actions.deleteGroupSuccess, (state, action) => {
    //   state.isLoading = false;
    //   state.groups.filter(item => item.id !== action.payload);
    // })
    .addDefaultCase((state, action) => {});
});

export default coursesReducer;
