import { CONTACT_SUCCESS, EDIT_CONTACT, GET_CONTACT } from '../constants';

const initialState = {
  contacts: [],
  contact: null,
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

    default:
      return state;
  }
};
