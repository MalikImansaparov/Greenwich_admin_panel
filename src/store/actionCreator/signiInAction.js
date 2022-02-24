import {
    SET_TOKEN,
    SIGNIN_STARTED,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SET_ROLE,
} from '../actionType/const';

export const setToken = (payload) => ({type: SET_TOKEN, payload})
export const setRole = (role) => ({type: SET_ROLE, payload: role})

export const signinStart = () => ({type: SIGNIN_STARTED})
export const signinSucc = (payload) => ({type: SIGNIN_SUCCESS, payload})
export const signinFail = (payload) => ({type: SIGNIN_FAILURE, payload})

