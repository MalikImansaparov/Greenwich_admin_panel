import {
  // LOGIN
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  // TOKEN REFRESH
  TOKEN_REFRESH_REQUEST,
  TOKEN_REFRESH_SUCCESS,
  TOKEN_REFRESH_FAILURE,
} from '../constants';

const initialAuthState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('access'),
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  is_superuser: localStorage.getItem('is_superuser'),
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        access: action.access,
        refresh: action.refresh,
        role: action.role,
        is_superuser: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.errorMessage,
      };
    case TOKEN_REFRESH_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOKEN_REFRESH_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        access: action.access,
      };
    case TOKEN_REFRESH_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        access: action.access,
        refresh: action.refresh,
        role: action.role,
        is_superuser: action.payload,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
