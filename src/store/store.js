import {SignInReducer} from "./reducers/authReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {orderReducer} from "./reducers/orderReducer";
import { authReducer } from './reducers/authReducer';
import {productsReducer} from "./reducers/productReducers";
import {employersReducer} from "./reducers/employerReducer";
import {contactsReducer} from "./reducers/contactsReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  orders: orderReducer,
  products: productsReducer,
  employers: employersReducer,
  contacts: contactsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
