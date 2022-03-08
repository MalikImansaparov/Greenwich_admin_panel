import {
    getProducts,
    ordersFail,
    ordersStart,
} from '../actionType/ordersAction';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncProducts = () => {
    return async (dispatch) => {
        dispatch(ordersStart());
        try {
            const {data} = await axiosInstance.get('products/plants/');
            dispatch(getProducts(data));
        } catch (e) {
            dispatch(ordersFail());
            console.log('error:', e);
        }
    };
};
