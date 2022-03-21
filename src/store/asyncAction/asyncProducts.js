import {
    addProduct,
    deleteProduct,
    getProduct,
    getProducts,
    ordersFail,
    ordersStart,
    updateProduct,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncAllProducts = () => {
    return async (dispatch) => {
        dispatch(ordersStart());
        try {
            const {data} = await axiosInstance.get('products/plant-care/');
            dispatch(getProducts(data));
        } catch (e) {
            dispatch(ordersFail());
            console.log('error:', e);
        }
    };
};
export const AsyncGetProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`products/plant-care/${id}`);
      dispatch(getProduct(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncAddProduct = (values) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post('products/plant-care/', values);
      dispatch(addProduct(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditProduct = ({ values, id }) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.patch(
        `products/plant-care/${id}/`,
        values
      );
      console.log(data);
      dispatch(updateProduct(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};
export const AsyncDeleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.delete(`products/plant-care/${id}`);
      dispatch(deleteProduct());
    } catch (e) {
      console.log('error:', e);
    }
  };
};
