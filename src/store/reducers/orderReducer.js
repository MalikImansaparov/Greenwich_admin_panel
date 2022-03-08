import { ORDER_FAILED, ORDER_STARTED, ORDER_SUCCESS} from "../constants";

const initialState = {
    order: [],
    loading: 'false'
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

        default:
            return state
    }
}
