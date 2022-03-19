import {
    ADD_EMPLOYER, ADD_PRODUCT,
    CONTACT_SUCCESS, DELETE_EMPLOYER, DELETE_PRODUCT, EDIT_CONTACT, EMPLOYER_FAILURE,
    EMPLOYER_PROFILE, EMPLOYER_REQUEST,
    EMPLOYER_SUCCESS, GET_CONTACT, GET_PRODUCT,
    ORDER_FAILED,
    ORDER_STARTED,
    ORDER_SUCCESS,
    PRODUCT_SUCCESS,
    SEARCH_ORDERS, UPDATE_EMPLOYER, UPDATE_PRODUCT
} from "../constants";

export const ordersStart = () => ({type: ORDER_STARTED})
export const ordersFail = (payload) => ({type: ORDER_FAILED, payload})
export const getOrders = (payload) => ({type: ORDER_SUCCESS, payload})

export const searchOrders = (payload) => ({type: SEARCH_ORDERS, payload})

export const getAllContacts = (payload) => ({type: CONTACT_SUCCESS,  payload})
export const getContact = (id) => ({ type: GET_CONTACT, payload: id });
export const editContact = (id) => ({ type: EDIT_CONTACT, payload: id });

export const employersStart = () => ({ type: EMPLOYER_REQUEST });
export const employersFail = (payload) => ({ type: EMPLOYER_FAILURE, payload });
export const getEmployers = (payload) => ({ type: EMPLOYER_SUCCESS, payload });
export const getProfile = (id) => ({ type: EMPLOYER_PROFILE, payload: id });
export const addEmployers = (payload) => ({ type: ADD_EMPLOYER, payload });
export const updateEmployers = (id) => ({ type: UPDATE_EMPLOYER, payload: id });
export const deleteEmployers = (id) => ({ type: DELETE_EMPLOYER, payload: id });

export const getProducts = (payload) => ({ type: PRODUCT_SUCCESS, payload });
export const getProduct = (id) => ({ type: GET_PRODUCT, payload: id });
export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload });
export const updateProduct = (id) => ({ type: UPDATE_PRODUCT, payload: id });
export const deleteProduct = (id) => ({ type: DELETE_PRODUCT, payload: id });
