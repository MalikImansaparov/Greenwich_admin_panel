import {
  ADD_CONTACT,
  CLEAR_ABOUT,
  CLEAR_CONTACT,
  CONTACT_SUCCESS,
  EDIT_ABOUT,
  EDIT_CONTACT,
  GET_ABOUT,
  GET_CONTACT,
} from '../constants';

const initialState = {
  contacts: [],
  contact: null,
  about: null,
};
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        contact: null,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, ...action.payload],
      };
    case GET_ABOUT:
      return {
        ...state,
        about: action.payload,
      };
    case EDIT_ABOUT:
      return {
        ...state,
        about: action.payload,
      };
    case CLEAR_ABOUT:
      return {
        ...state,
        about: null,
      };

    default:
      return state;
  }
};
