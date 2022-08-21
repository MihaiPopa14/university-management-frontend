import { Student } from '../../types/Student';
import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://192.168.1.5:5000'
});

export const fetchStudents = async () => {
  const response: Array<Student> = await api.get('students').json();
  return response;
};

export const addStudentFy = async (newStudent: Student) => {
  const response: Student = await api
    .post('students', {
      json: newStudent
    })
    .json();
  return response;
};
