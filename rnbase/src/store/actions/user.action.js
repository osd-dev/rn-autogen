import * as ActionTypes from './ActionTypes';
import * as Services from '@/services';

export const getUsers = () => {
  return dispatch => {
    dispatch({type: ActionTypes.GET_USER});
    Services.getUsers()
      .then(users => {
        dispatch({type: ActionTypes.GET_USER_SUCCESS, users});
      })
      .catch(err => {
        dispatch({type: ActionTypes.GET_USER_FAILED, message: err.message});
      });
  };
};
