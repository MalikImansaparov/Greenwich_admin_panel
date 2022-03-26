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
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(
        "products/plant-care/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(addProduct(data));
    } catch (e) {
      console.log("error:", e);
    }
  };
};

export const AsyncEditProduct = (formData, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.patch(
        `products/plant-care/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(updateProduct(data));
      dispatch(AsyncAllProducts());
    } catch (e) {
      console.log("error:", e);
    }
  };
};

export const AsyncDeleteProduct = (id) => {
  return (dispatch) => {
    axiosInstance
      .delete(`products/plant-care/${id}`)
      .then(() => {
        dispatch(deleteProduct(id));
        dispatch(AsyncAllProducts());
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };
};
