import { Course } from '../../types/Course';
import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://192.168.0.114:5000'
});

export const fetchCourses = async () => {
  const response: Array<Course> = await api.get('courses').json();
  return response;
};

export const addCourseFy = async (newCourse: Course) => {
  const response: Course = await api
    .post('courses', {
      json: newCourse
    })
    .json();
  return response;
};

export const deleteCourseFy = async (courseId: string) => {
  const response: string = await api.delete(`courses/${courseId}`).json();
  return response;
};
