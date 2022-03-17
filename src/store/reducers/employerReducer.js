import {ADD_EMPLOYER, EMPLOYER_FAILURE, EMPLOYER_PROFILE, EMPLOYER_REQUEST, EMPLOYER_SUCCESS} from "../constants";

const initialState = {
  user: [],
  profile: [],
  loading: false,
};
export const employersReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYER_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
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
        user: action.payload,
      };
    case EMPLOYER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};
