import { Professor } from '../../types/Professor';
import { createAction } from '@reduxjs/toolkit';

export const getProfessors = createAction('getProfessors');

export const getProfessorsSuccess = createAction<Array<Professor>>('getProfessorsSuccess');
export const getProfessorsFailed = createAction('getProfessorsFailed');

export const addProfessor = createAction<Professor>('addProfessors');

export const addProfessorSuccess = createAction<Professor>('addProfessorsSuccess');
export const addProfessorFailed = createAction('addProfessorsFailed');
