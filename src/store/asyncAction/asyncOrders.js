import {instance} from "../../api/api";
import {getOrders, ordersFail, ordersStart} from "../actionCreator/ordersAction";

export const AsyncOrders = () => {
    return async dispatch => {
        dispatch(ordersStart())
        try {
            const data = await instance.get('orders/order');
            dispatch(getOrders(data))
        }
        catch (e) {
            dispatch(ordersFail())
            console.log('error:', e)
        }

    }
}
