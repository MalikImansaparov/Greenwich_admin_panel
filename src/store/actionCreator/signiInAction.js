import {
    HOMEPAGE_HASTOKEN,
    SIGNIN_STARTED,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
} from '../actionType/const';

export const homePageHasToken = (payload) => ({type: HOMEPAGE_HASTOKEN, payload})

export const signinStart = () => ({type: SIGNIN_STARTED})
export const signinSucc = (payload) => ({type: SIGNIN_SUCCESS, payload})
export const signinFail = (payload) => ({type: SIGNIN_FAILURE, payload})

