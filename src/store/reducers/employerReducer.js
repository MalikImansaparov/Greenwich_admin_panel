import {
  ADD_EMPLOYER,
  EMPLOYER_FAILURE,
  EMPLOYER_PROFILE,
  EMPLOYER_REQUEST,
  EMPLOYER_SUCCESS,
  DELETE_EMPLOYER,
  UPDATE_EMPLOYER,
  CLEAR_PROFILE,
} from '../constants';

const initialState = {
  user: [],
  profile: null,
  loading: false,
};
export const employersReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EMPLOYER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case EMPLOYER_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
      };
    case ADD_EMPLOYER:
      return {
        ...state,
        user: [...state.user, ...action.payload],
      };
    case EMPLOYER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case DELETE_EMPLOYER:
      return {
        ...state,
        user: state.user.filter((item) => item.id !== action.payload),
      };
    case UPDATE_EMPLOYER:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};
