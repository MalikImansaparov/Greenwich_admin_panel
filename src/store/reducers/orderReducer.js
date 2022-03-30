import {
    CLEAR_PRODUCT, COMPLETED_ORDERS, CONFIRM_ORDERS, DELETE_ORDERS,
    GET_PRODUCT,
    ORDER_FAILED,
    ORDER_STARTED,
    ORDER_SUCCESS,
    UPDATE_PRODUCT
} from "../constants";

const initialState = {
    orders: [],
    completedOrders: [],
    loading: 'false',
    order: [],
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_STARTED:
            return {
            ...state,
            loading: true,
                orders: null
        }
        case ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case ORDER_FAILED:
            return {
                ...state,
                loading: false,
                orders: null
            }
        case COMPLETED_ORDERS:
            return {
                ...state,
                completedOrders: action.payload,
            };
        case GET_PRODUCT:
            return {
                ...state,
                order: action.payload,
                loading: false,
            };
        case CLEAR_PRODUCT:
            return {
                ...state,
                orders: null,
            };
        case CONFIRM_ORDERS:
            return {
                ...state,
                order: action.payload,
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                order: action.payload,
            };
        case DELETE_ORDERS:
            return {
                ...state,
                order: state.orders.filter((item) => item.id !== action.payload),
            };

        default:
            return state
    }
}
