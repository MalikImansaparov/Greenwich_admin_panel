import {
  completedOrders,
  confrimOrders,
  deleteOrders,
  getOrders,
  ordersFail,
  ordersStart,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncOrders = () => {
  return async (dispatch) => {
    dispatch(ordersStart());
    try {
      const {data} = await axiosInstance.get('orders/order/?is_active=true', {
        // params: {
        //   is_active: true
        // }
      });
      dispatch(getOrders(data));
    } catch (e) {
      dispatch(ordersFail());
      console.log('error:', e);
    }
  };
};

export const AsyncCompletedOrders= () => {
  return async (dispatch) => {
    dispatch(ordersStart());
    try {
      const {data} = await axiosInstance.get('orders/order/', {
        params: {
          is_active: false
        }
      });
      dispatch(completedOrders(data));
    } catch (e) {
      dispatch(ordersFail());
      console.log('error:', e);
    }
  };
};

export const AsyncDeleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axiosInstance.delete(`orders/order/${id}`);
      dispatch(deleteOrders(data));
      dispatch(getOrders());
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncConfirmOrder = (data, id) => {
  return async (dispatch) => {
    try {
      const {data} = await axiosInstance.patch('orders/order/', {data, id});
      dispatch(confrimOrders(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncGetOrder = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axiosInstance.get('orders/order', id);
      dispatch(getOrders(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditOrder = (data, id) => {
  return async (dispatch) => {
    try {
      const {data} = await axiosInstance.patch('orders/order', {data, id});
      dispatch(getOrders(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};
