import { Student } from '../../types/Student';
import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://192.168.0.114:5000'
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

export const deleteStudentFy = async (studId: string) => {
  const response: string = await api.delete(`students/${studId}`).json();
  return response;
};

export const editStudentFy = async (selectedStudent: Student) => {
  const response: string = await api
    .patch(`students/${selectedStudent._id}`, { json: selectedStudent })
    .json();
  return response;
};
