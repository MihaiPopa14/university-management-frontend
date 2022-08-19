import { Group } from '../../types/Group';
import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://192.168.1.2:5000'
});

export const fetchGroups = async () => {
  const response: Array<Group> = await api.get('groups').json();
  return response;
};

export const addGroupFy = async (newGroup: Group) => {
  const response: Group = await api
    .post('groups', {
      json: newGroup
    })
    .json();
  return response;
};

export const deleteGroupFy = async (groupId: string) => {
  const response: string = await api.delete(`groups/${groupId}`).json();
  return response;
};
