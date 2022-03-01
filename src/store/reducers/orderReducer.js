import {GET_ORDERS, ORDER_FAILED, ORDER_STARTED, ORDER_SUCCESS} from "../constants";

const initialState = {
    order: null,
    loading: 'false'
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_STARTED:
            return {
            ...state,
            loading: true
        }
        case ORDER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case ORDER_FAILED:
            return {
                ...state,
                loading: false
            }
        case GET_ORDERS:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
}
