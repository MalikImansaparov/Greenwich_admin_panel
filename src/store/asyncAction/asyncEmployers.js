import {
    getEmployers,
    getOrders,
    ordersFail,
    ordersStart,
} from '../actionType/ordersAction';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncEmployers = () => {
    return async (dispatch) => {
        dispatch(ordersStart());
        try {
            const {data} = await axiosInstance.get('posts');
            dispatch(getEmployers(data));
        } catch (e) {
            dispatch(ordersFail());
            console.log('error:', e);
        }
    };
};
