import { Group } from '../../types/Group';

export type StateStructure = {
  groupsSection: {
    groups: Array<Group>;
  };
};

export const groupsSelector = (state: StateStructure) => state.groupsSection.groups;
export const groupsCountSelector = (state: StateStructure) => state.groupsSection.groups.length;
