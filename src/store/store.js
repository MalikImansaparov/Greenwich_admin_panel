import {SignInReducer} from "./reducers/authReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {orderReducer} from "./reducers/orderReducer";
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  orders: orderReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
