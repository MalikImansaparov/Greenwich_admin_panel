import {
    ADD_PRODUCT,
    DELETE_PRODUCT, GET_PRODUCT,
    PRODUCT_FAILURE,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    UPDATE_PRODUCT
} from "../constants";

const initialState = {
  product: [],
  loading: 'false',
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        product: null,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        product: null,
      };
    case GET_PRODUCT:
      return {
        ...state,
        care: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, ...action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        care: action.payload,
        // product: state.product.map((item) =>
        //   item.id === action.payload.id ? action.payload : item
        // ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
