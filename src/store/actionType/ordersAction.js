import {GET_ORDERS, ORDER_FAILED, ORDER_STARTED, ORDER_SUCCESS, SEARCH_ORDERS} from "../constants";

export const ordersStart = () => ({type: ORDER_STARTED})
export const ordersFail = (payload) => ({type: ORDER_FAILED, payload})
export const getOrders = (payload) => ({type: GET_ORDERS, payload})

export const searchOrders = (payload) => ({type: SEARCH_ORDERS, payload})
