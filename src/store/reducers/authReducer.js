import {ORDER_FAILED, SET_ROLE, SET_TOKEN, SIGNIN_FAILURE, SIGNIN_STARTED, SIGNIN_SUCCESS} from "../actionType/const";

const initialState = {
    'number': '',
    'password': '',
    'token': '',
    'role': '',
    'loading': false
}
export const SignInReducer = (state = initialState, action) => {
    switch(action.type){
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
        case SIGNIN_FAILURE:
            return {
                ...state,
                loading: false
            }
        // case SET_TOKEN:
        //     return {
        //         ...state,
        //        token: localStorage.setItem('token', payload)
        //     }
        // case SET_ROLE:
        //     return {
        //         ...state,
        //         role: localStorage.setItem('role', payload)
        //     }
        default:
            return state
    }
}
