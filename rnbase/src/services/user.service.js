import {getFn} from './Base';
import {Api} from '@/commons';

export const getUsers = () => {
  return getFn(Api.USERS);
};
