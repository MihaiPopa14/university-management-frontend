import { Professor } from '../../types/Professor';

export type StateStructure = {
  professorsSection: {
    professors: Array<Professor>;
  };
};

export const professorsSelector = (state: StateStructure) => state.professorsSection.professors;
export const professorsCountSelector = (state: StateStructure) =>
  state.professorsSection.professors.length;
