import { Student } from '../../types/Student';

export type StateStructure = {
  studentsSection: {
    students: Array<Student>;
  };
};

export const studentsSelector = (state: StateStructure) => state.studentsSection.students;
export const studentsCountSelector = (state: StateStructure) =>
  state.studentsSection.students.length;
