import {
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
} from "../constants";

const initialState = {
    contacts: [],
    loading: 'false'
}
export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
                order: null
            }
        case CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case CONTACT_FAILURE:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}
