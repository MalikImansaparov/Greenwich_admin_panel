import {
  getOrders,
  ordersFail,
  ordersStart,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncOrders = () => {
  return async (dispatch) => {
    dispatch(ordersStart());
    try {
      const {data} = await axiosInstance.get('orders/order');
      dispatch(getOrders(data));
    } catch (e) {
      dispatch(ordersFail());
      console.log('error:', e);
    }
  };
};
