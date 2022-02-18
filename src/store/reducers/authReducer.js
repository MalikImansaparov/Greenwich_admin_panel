import {SIGNIN_STARTED, SIGNIN_SUCCESS} from "../actionType/const";

const initialState = {
    'number': '',
    'password': '',
    'loading': false
}
export const SignInReducer = (state = initialState, action) => {
    switch(state, action.type){
        case SIGNIN_STARTED:
            return {
                ...state,
                loading: true
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
