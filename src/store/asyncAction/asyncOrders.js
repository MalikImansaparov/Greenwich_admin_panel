import {
  completedOrders,
  confrimOrders,
  deleteOrders, editOrders,
  getOrders,
  ordersFail,
  ordersStart, reciveOrder,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncOrders = () => {
  return async (dispatch) => {
    dispatch(ordersStart());
    try {
      const {data} = await axiosInstance.get('orders/order/',{
        params: {
          is_active: false
        }
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
          is_active: true
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

export const AsyncConfirmOrder = (confirm, id) => {
  return async (dispatch) => {
    try {
      const {data} = await axiosInstance.patch(`orders/order/${id}/`, {confirm});
      dispatch(confrimOrders(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncGetOrder = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axiosInstance.get(`orders/order/${id}`, );
      dispatch(reciveOrder(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditOrder = (values, id) => {
  return async (dispatch) => {
    try {
      const {data} = await axiosInstance.patch(`orders/order/${id}/`, values);
      dispatch( editOrders(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};
