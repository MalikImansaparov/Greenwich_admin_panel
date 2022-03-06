import {PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS} from "../constants";

const initialState = {
    product: [],
    loading: 'false'
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                product: null
            }
        case PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload
            }
        case PRODUCT_FAILURE:
            return {
                ...state,
                product: false
            }

        default:
            return state
    }
}
