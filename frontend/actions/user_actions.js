import * as APIUtil from '../util/users_api_util';


export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  };
};



export const fetchUser = userId => dispatch => {
  return APIUtil.fetchUser(userId)
    .then(payload => dispatch(receiveUser(payload)));
};

