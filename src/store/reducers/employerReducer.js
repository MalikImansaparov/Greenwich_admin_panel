import {
  ADD_EMPLOYER,
  EMPLOYER_FAILURE,
  EMPLOYER_PROFILE,
  EMPLOYER_REQUEST,
  EMPLOYER_SUCCESS,
  DELETE_EMPLOYER,
  UPDATE_EMPLOYER,
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
        user: null,
        profile: null,
      };
    case EMPLOYER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        profile: null,
      };
    case EMPLOYER_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        profile: null,
      };
    case ADD_EMPLOYER:
      return {
        ...state,
        user: action.payload,
        profile: null,
      };
    case EMPLOYER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case DELETE_EMPLOYER:
      return {
        ...state,
        user: state.user.filter((item) => item.id != action.payload),
      };
    case UPDATE_EMPLOYER:
      return {
        ...state,
        user: state.user.map((item) =>
          item.id == action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};
