import * as actions from './actions';

import { Group } from '../../types/Group';
import { createReducer } from '@reduxjs/toolkit';

type groupInitialState = {
  groups: Array<Group>;
  isLoading: boolean;
};

const initialState: groupInitialState = {
  groups: [],
  isLoading: false
};

const groupsReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.getGroups, state => {
      state.isLoading = true;
    })
    .addCase(actions.getGroupsSuccess, (state, action) => {
      state.isLoading = false;
      state.groups = action.payload;
    })
    .addCase(actions.getGroupsFailed, state => {
      state.isLoading = false;
    })
    .addCase(actions.addGroup, state => {
      state.isLoading = true;
    })
    .addCase(actions.addGroupSuccess, (state, action) => {
      state.isLoading = false;
      state.groups.unshift(action.payload);
    })
    .addCase(actions.addGroupFailed, state => {
      state.isLoading = false;
    })
    .addCase(actions.deleteGroup, state => {
      state.isLoading = true;
    })
    .addCase(actions.deleteGroupSuccess, (state, action) => {
      state.isLoading = false;
      state.groups.filter(item => item._id !== action.payload);
    })
    .addCase(actions.deleteGroupFailed, state => {
      state.isLoading = false;
    })
    .addDefaultCase((state, action) => {});
});

export default groupsReducer;
