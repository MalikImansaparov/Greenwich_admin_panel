import {
    getContacts,
    getEmployers,
    getOrders,
    ordersFail,
    ordersStart,
} from '../actionType/ordersAction';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncContacts = () => {
    return async (dispatch) => {
        dispatch(ordersStart());
        try {
            const {data} = await axiosInstance.get('contacts');
            dispatch(getContacts(data));
        } catch (e) {
            dispatch(ordersFail());
            console.log('error:', e);
        }
    };
};
