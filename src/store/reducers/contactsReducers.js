import {
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS, EDIT_CONTACT, GET_CONTACT,
} from "../constants";

const initialState = {
    contact: [],
}
export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_REQUEST:
            return {
                ...state,
                contact: action.payload
            }
        case EDIT_CONTACT:
            return {
                ...state,
                contact: action.payload
            }
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            }

        default:
            return state
    }
}
