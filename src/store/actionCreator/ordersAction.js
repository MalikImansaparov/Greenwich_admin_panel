import {GET_ORDERS, ORDER_FAILED, ORDER_STARTED, ORDER_SUCCESS} from "../actionType/const";


export const ordersStart = () => ({type: ORDER_STARTED})
export const ordersSucc = (payload) => ({type: ORDER_SUCCESS, payload})
export const ordersFail = (payload) => ({type: ORDER_FAILED, payload})
export const getOrders = (payload) => ({type: GET_ORDERS, payload})
