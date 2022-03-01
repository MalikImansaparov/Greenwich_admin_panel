import {
  // LOGIN
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  // LOGOUT
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  // GET USER INFO
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  // TOKEN REFRESH
  TOKEN_REFRESH_REQUEST,
  TOKEN_REFRESH_SUCCESS,
  TOKEN_REFRESH_FAILURE,
} from '../constants';

const initialAuthState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('access'),
  isAdmin: localStorage.getItem('role') ? 'админ'  : 'cуперадмин',
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
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
        role: action.role
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.errorMessage,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        access: undefined,
        refresh: undefined,
        role: undefined
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        user: action.user,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
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
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
