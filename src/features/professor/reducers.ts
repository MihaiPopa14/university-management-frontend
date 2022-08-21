import * as actions from './actions';

import { Professor } from '../../types/Professor';
import { createReducer } from '@reduxjs/toolkit';

type professorInitialState = {
  professors: Array<Professor>;
  isLoading: boolean;
};

const initialState: professorInitialState = {
  professors: [],
  isLoading: false
};

const professorsReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.getProfessors, state => {
      state.isLoading = true;
    })
    .addCase(actions.getProfessorsSuccess, (state, action) => {
      state.isLoading = false;
      state.professors = action.payload;
    })
    .addCase(actions.getProfessorsFailed, state => {
      state.isLoading = false;
    })
    .addCase(actions.addProfessor, state => {
      state.isLoading = true;
    })
    .addCase(actions.addProfessorSuccess, (state, action) => {
      state.isLoading = false;
      state.professors.unshift(action.payload);
    })
    .addCase(actions.addProfessorFailed, state => {
      state.isLoading = false;
    })
    .addCase(actions.deleteProfessor, state => {
      state.isLoading = true;
    })
    .addCase(actions.deleteProfessorSuccess, (state, action) => {
      state.isLoading = false;
      state.professors = state.professors.filter(item => item._id !== action.payload);
    })
    .addCase(actions.deleteProfessorFailed, state => {
      state.isLoading = false;
    })
    .addDefaultCase((state, action) => {});
});

export default professorsReducer;
