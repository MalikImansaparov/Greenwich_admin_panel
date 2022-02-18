import {SignInReducer} from "./reducers/authReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
   SignInReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
