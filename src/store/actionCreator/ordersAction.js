import {
    HOMEPAGE_HASTOKEN,
    SIGNIN_STARTED,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
} from '../actionType/const';

export const homePageHasToken = (payload) => ({type: HOMEPAGE_HASTOKEN, payload})

export const ordersStart = () => ({type: SIGNIN_STARTED})
export const ordersSucc = (payload) => ({type: SIGNIN_SUCCESS, payload})
export const ordersFail = (payload) => ({type: SIGNIN_FAILURE, payload})

