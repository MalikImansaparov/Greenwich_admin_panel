import {
  ADD_EMPLOYER,
  ADD_PRODUCT,
  ADD_CONTACT,
  CLEAR_PRODUCT,
  CLEAR_PROFILE,
  CONTACT_SUCCESS,
  DELETE_EMPLOYER,
  DELETE_PRODUCT,
  EDIT_CONTACT,
  EMPLOYER_FAILURE,
  EMPLOYER_PROFILE,
  EMPLOYER_REQUEST,
  EMPLOYER_SUCCESS,
  GET_CONTACT,
  GET_PRODUCT,
  ORDER_FAILED,
  ORDER_STARTED,
  ORDER_SUCCESS,
  PRODUCT_SUCCESS,
  SEARCH_ORDERS,
  UPDATE_EMPLOYER,
  UPDATE_PRODUCT,
  GET_ABOUT,
  EDIT_ABOUT,
  CLEAR_ABOUT, GET_CONTENT, GET_COURIER, CLEAR_COURIER, CONFIRM_ORDERS, DELETE_ORDERS, COMPLETED_ORDERS,
} from '../constants';

export const ordersStart = () => ({ type: ORDER_STARTED });
export const ordersFail = (payload) => ({ type: ORDER_FAILED, payload });
export const getOrders = (payload) => ({ type: ORDER_SUCCESS, payload });
export const deleteOrders = (id) => ({ type: DELETE_ORDERS, payload: id });
export const confrimOrders = (payload) => ({ type: CONFIRM_ORDERS, payload });
export const completedOrders = (payload) => ({ type: COMPLETED_ORDERS, payload });

export const searchOrders = (payload) => ({ type: SEARCH_ORDERS, payload });

export const getAllContacts = (payload) => ({ type: CONTACT_SUCCESS, payload });
export const getContact = (payload) => ({ type: GET_CONTACT, payload });
export const editContact = (payload) => ({ type: EDIT_CONTACT, payload });
export const clearContact = (payload) => ({ type: EDIT_CONTACT, payload });
export const addContact = (payload) => ({ type: ADD_CONTACT, payload });

export const getAbout = (payload) => ({ type: GET_ABOUT, payload });
export const editAbout = (payload) => ({ type: EDIT_ABOUT, payload });
export const clearAbout = (payload) => ({ type: CLEAR_ABOUT, payload });
export const getContent = (payload) => ({ type: GET_CONTENT, payload });

export const employersStart = () => ({ type: EMPLOYER_REQUEST });
export const employersFail = (payload) => ({ type: EMPLOYER_FAILURE, payload });
export const getEmployers = (payload) => ({ type: EMPLOYER_SUCCESS, payload });
export const getProfile = (payload) => ({ type: EMPLOYER_PROFILE, payload });
export const clearProfile = (payload) => ({ type: CLEAR_PROFILE, payload });
export const addEmployers = (payload) => ({ type: ADD_EMPLOYER, payload });
export const updateEmployers = (payload) => ({
  type: UPDATE_EMPLOYER,
  payload,
});
export const deleteEmployers = (id) => ({ type: DELETE_EMPLOYER, payload: id });
export const getCourier = (payload) => ({ type: GET_COURIER, payload });
export const clearCourier = (payload) => ({ type: CLEAR_COURIER, payload });

export const getProducts = (payload) => ({ type: PRODUCT_SUCCESS, payload });
export const getProduct = (payload) => ({ type: GET_PRODUCT, payload });
export const clearProduct = (payload) => ({ type: CLEAR_PRODUCT, payload });
export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload });
export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});
export const deleteProduct = (id) => ({ type: DELETE_PRODUCT, payload: id });
