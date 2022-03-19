import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../../constants';

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true
  };
}

  const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

  const logoutError = (errorMessage) => {
  return {
    type: LOGOUT_FAILURE,
    isFetching: false,
    errorMessage
  };
}

export const logoutAdmins = () => dispatch => {
  dispatch(requestLogout());
try {
         localStorage.removeItem('access');
         localStorage.removeItem('refresh');
         localStorage.removeItem('firstName');
         localStorage.removeItem('lastName');
         localStorage.removeItem('is_superuser');
        dispatch(logoutSuccess());
}
    catch (err) {
      dispatch(logoutError(err));
    }
};
