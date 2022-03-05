import {
    CONTACT_SUCCESS,
    EMPLOYER_SUCCESS,
    ORDER_FAILED,
    ORDER_STARTED,
    ORDER_SUCCESS,
    PRODUCT_SUCCESS,
    SEARCH_ORDERS
} from "../constants";

export const ordersStart = () => ({type: ORDER_STARTED})
export const ordersFail = (payload) => ({type: ORDER_FAILED, payload})
export const getOrders = (payload) => ({type: ORDER_SUCCESS, payload})

export const searchOrders = (payload) => ({type: SEARCH_ORDERS, payload})

export const getEmployers = (payload) => ({type: EMPLOYER_SUCCESS, payload})

export const getProducts = (payload) => ({type: PRODUCT_SUCCESS, payload})

export const getContacts = (payload) => ({type: CONTACT_SUCCESS,  payload})
