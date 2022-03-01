import { AuthApi } from '../../../api';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants';

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
  };
}

function loginSuccess(tokens) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    access: tokens.access,
    refresh: tokens.refresh,
    role: tokens.role,
  };
}

function loginError(errorMessage) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    errorMessage,
  };
}

export const asyncLogin =
  ({ phone_number, password }) =>
  (dispatch) => {
    dispatch(requestLogin());

    AuthApi.login(phone_number, password)
      .then(({ reason, access, refresh, role }) => {
        if (reason) throw new Error(reason);

        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);
        localStorage.setItem('role', role);

        dispatch(loginSuccess({ access, refresh, role }));
      })
      .catch((err) => dispatch(loginError(err)));
  };
