import {
    CLEAR_PRODUCT, COMPLETED_ORDERS, CONFIRM_ORDERS, DELETE_ORDERS,
    GET_PRODUCT,
    ORDER_FAILED,
    ORDER_STARTED,
    ORDER_SUCCESS,
    UPDATE_PRODUCT
} from "../constants";

const initialState = {
    order: [],
    loading: 'false',
    completed: [],
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_STARTED:
            return {
            ...state,
            loading: true,
                order: null
        }
        case ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case ORDER_FAILED:
            return {
                ...state,
                loading: false
            }
        case COMPLETED_ORDERS:
            return {
                ...state,
                completed: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                order: action.payload,
                loading: false,
            };
        case CLEAR_PRODUCT:
            return {
                ...state,
                order: null,
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
                order: state.order.filter((item) => item.id !== action.payload),
            };

        default:
            return state
    }
}
