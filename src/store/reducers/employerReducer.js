import {EMPLOYER_FAILURE, EMPLOYER_REQUEST, EMPLOYER_SUCCESS} from "../constants";

const initialState = {
    user: [],
    loading: false,
}
export const employersReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYER_REQUEST:
            return {
                ...state,
                loading: true,
                user: null
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
                user: null
            };
        default:
            return state
    }
}
