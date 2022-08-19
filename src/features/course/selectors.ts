import { Course } from '../../types/Course';

export type StateStructure = {
  coursesSection: {
    courses: Array<Course>;
  };
};

export const coursesSelector = (state: StateStructure) => state.coursesSection.courses;
export const coursesCountSelector = (state: StateStructure) => state.coursesSection.courses.length;
