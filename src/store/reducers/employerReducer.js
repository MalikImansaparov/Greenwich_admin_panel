import {EMPLOYER_FAILURE, EMPLOYER_REQUEST, EMPLOYER_SUCCESS} from "../constants";

const initialState = {
    user: [],
}
export const employersReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYER_REQUEST:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case EMPLOYER_SUCCESS:
            return {
                ...state,
                isFetching: action.isFetching,
                user: action.payload,
            };
        case EMPLOYER_FAILURE:
            return {
                ...state,
                isFetching: action.isFetching,
                errorMessage: action.errorMessage,
            };
        default:
            return state
    }
}
