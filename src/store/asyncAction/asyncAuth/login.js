import { AuthApi } from '../../../api';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants';

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
  };
}

const loginSuccess = (tokens) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    access: tokens.access,
    refresh: tokens.refresh,
    is_superuser: tokens.is_superuser,
    name: tokens.name,
    lastName: tokens.lastName,
  };
};
const loginError = (errorMessage) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    errorMessage,
  };
};

export const asyncLogin =
  ({ phone_number, password }) =>
  (dispatch) => {
    dispatch(requestLogin());
    AuthApi.login(phone_number, password)
      .then(
        ({ reason, access, refresh, last_name, first_name, is_superuser }) => {
          localStorage.setItem('access', access);
          localStorage.setItem('refresh', refresh);
          localStorage.setItem('firstName', first_name);
          localStorage.setItem('lastName', last_name);
          localStorage.setItem('is_superuser', is_superuser);
          dispatch(
            loginSuccess({
              access,
              refresh,
              is_superuser,
              first_name,
              last_name,
            })
          );
          if (reason) throw new Error(reason);
        }
      )
      .catch((err) => dispatch(loginError(err)));
  };
