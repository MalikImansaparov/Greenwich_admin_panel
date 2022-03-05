import {PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS} from "../constants";

const initialState = {
    order: [],
    loading: 'false'
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                order: null
            }
        case PRODUCT_SUCCESS:
            return {
                ...state,
                order: action.payload
            }
        case PRODUCT_FAILURE:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}
