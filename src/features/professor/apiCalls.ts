import { Professor } from '../../types/Professor';
import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://192.168.1.5:5000'
});

export const fetchProfessors = async () => {
  const response: Array<Professor> = await api.get('professors').json();
  return response;
};

export const addProfessorFy = async (newProfessor: Professor) => {
  const response: Professor = await api
    .post('professors', {
      json: newProfessor
    })
    .json();
  return response;
};
export const deleteProfessorFy = async (profId: string) => {
  const response: string = await api.delete(`professors/${profId}`).json();
  return response;
};
