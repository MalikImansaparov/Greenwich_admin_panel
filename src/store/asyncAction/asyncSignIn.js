import {instance} from "../../api/api";
import {setToken, signinFail, signinStart, } from "../actionCreator/signiInAction";
import jwt_decode from "jwt-decode";

export const AsyncSignIn = (phone_number, password) => {
    return async dispatch => {
         dispatch(signinStart())
        try {
            const {data} = await instance.post('employee-login', { data: JSON.stringify({phone_number, password})} )
            localStorage.setItem('token', data.token)
            // dispatch(setToken(data.role))
            // localStorage.setItem('role', data.role)
            // const decoded = jwt_decode(localStorage.getItem('token'));
            // const filter = decoded.filter(user => user.user_id);
            //  console.log(decoded);
        }
        catch(error) {
            dispatch(signinFail())
            console.log("error:", error)
        }
    }
}


