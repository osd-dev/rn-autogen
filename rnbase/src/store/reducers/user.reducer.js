import * as ActionTypes from '../actions/ActionTypes';
const defaultState = {
  users: [],
  loading: false,
  message: '',
};

export default function userReducers(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return {...state, loading: true, message: ''};
    case ActionTypes.GET_USER_SUCCESS:
      return {...state, loading: false, users: action.users};
    case ActionTypes.GET_USER_FAILED:
      return {...state, loading: false, message: action.message};
    default:
      return state;
  }
}
