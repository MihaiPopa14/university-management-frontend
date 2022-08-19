import { Group } from '../../types/Group';
import { createAction } from '@reduxjs/toolkit';

export const getGroups = createAction('getGroups');

export const getGroupsSuccess = createAction<Array<Group>>('getGroupsSuccess');
export const getGroupsFailed = createAction('getGroupsFailed');

export const addGroup = createAction<Group>('addGroup');

export const addGroupSuccess = createAction<Group>('addGroupSuccess');
export const addGroupFailed = createAction('addGroupFailed');

export const deleteGroup = createAction<string | undefined>('deleteGroup');

export const deleteGroupSuccess = createAction<string>('deleteGroupSuccess');
export const deleteGroupFailed = createAction('deleteGroupFailed');
