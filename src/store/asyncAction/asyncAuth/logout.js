import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../../constants';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

function logoutError(errorMessage) {
  return {
    type: LOGOUT_FAILURE,
    isFetching: false,
    errorMessage
  };
}

export const logoutAdmins = () => dispatch => {
  dispatch(requestLogout());
try {
        localStorage.clear();
        dispatch(logoutSuccess());
}
    catch (err) {
      dispatch(logoutError(err));
    }
};
