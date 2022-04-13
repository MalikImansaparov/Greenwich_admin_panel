import {
  completedOrders,
  confrimOrders,
  deleteOrders, editOrders,
  getOrders,
  ordersFail,
  ordersStart, reciveOrder,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";
import {toast} from "react-toastify";

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
  return (dispatch) => {
      toast.promise(
 axiosInstance.delete(`orders/order/${id}`),
    {
      pending: 'Ожидание...',
          success: 'Успешно отменено',
        error: 'Возникла ошибка'
    }
 ).then(() => {
    dispatch(deleteOrders(id));
    dispatch(AsyncGetOrder());
    }).catch((error) => {
          console.log('error:', error);
        })
  };
};

export const AsyncConfirmOrder = (confirm, id) => {
  return (dispatch) => {
    toast
      .promise(axiosInstance.patch(`orders/order/${id}/`, { confirm }), {
        pending: 'Подверждение...',
        success: 'Успешно подверждено',
        error: 'Возникла ошибка',
      })
      .then((data) => {
        dispatch(confrimOrders(data));
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };
};

export const AsyncGetOrder = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`orders/order/${id}`);
      dispatch(reciveOrder(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditOrder = (values, id) => {
  return (dispatch) => {
    toast
      .promise(axiosInstance.patch(`orders/order/${id}/`, values), {
        pending: 'Ожидание...',
        success: 'Успешно изменено',
        error: 'Возникла ошибка',
      })
      .then((data) => {
        dispatch(editOrders(data));
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };
};
