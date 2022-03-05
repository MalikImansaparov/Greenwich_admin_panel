import {
  getOrders,
  ordersFail,
  ordersStart,
} from '../actionType/ordersAction';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncOrders = () => {
  return async (dispatch) => {
    dispatch(ordersStart());
    try {
      const {data} = await axiosInstance.get('posts');
      dispatch(getOrders(data));
    } catch (e) {
      dispatch(ordersFail());
      console.log('error:', e);
    }
  };
};
