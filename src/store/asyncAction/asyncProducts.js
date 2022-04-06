import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  ordersFail,
  ordersStart,
  updateProduct,
} from "../actionType/actionTypes";
import axiosInstance from "../../api/utils/axiosInstance";
import {toast} from "react-toastify";

export const AsyncAllProducts = () => {
  return async (dispatch) => {
    dispatch(ordersStart());
    try {
      const { data } = await axiosInstance.get("products/plant-care/");
      dispatch(getProducts(data));
    } catch (e) {
      dispatch(ordersFail());
      console.log("error:", e);
    }
  };
};

export const AsyncGetProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`products/plant-care/${id}/`);
      dispatch(getProduct(data));
    } catch (e) {
      console.log("error:", e);
    }
  };
};

export const AsyncAddProduct = (formData) => {
  return (dispatch) => {
    toast
      .promise(
        axiosInstance.post('products/plant-care/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
        {
          pending: 'Ожидание...',
          success: 'Успешно добавлено',
          error: 'Возникла ошибка',
        }
      )
      .then((data) => {
        dispatch(addProduct(data));
        dispatch(AsyncAllProducts());
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };
};

export const AsyncEditProduct = (formData, id) => {
  return (dispatch) => {
    toast
      .promise(
        axiosInstance.patch(`products/plant-care/${id}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
        {
          pending: 'Ожидание...',
          success: 'Успешно изменено',
          error: 'Возникла ошибка',
        }
      )
      .then((data) => {
        dispatch(updateProduct(data));
        dispatch(AsyncAllProducts());
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };
};

export const AsyncDeleteProduct = (id) => {
  return (dispatch) => {
      toast.promise(
    axiosInstance
      .delete(`products/plant-care/${id}`), {
            pending: 'Удаление...',
            success: 'Успешно удалено',
            error: 'Возникла ошибка'
          })
      .then(() => {
        dispatch(deleteProduct(id));
        dispatch(AsyncAllProducts());
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };
};
