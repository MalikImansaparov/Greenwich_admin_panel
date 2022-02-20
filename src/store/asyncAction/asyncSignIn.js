import {instance} from "../../api/api";
import {signinFail, signinStart, signinSucc} from "../actionCreator/signiInAction";

export const AsyncSignIn = (values) => {
    return async dispatch => {
         dispatch(signinStart())
        try {
             const data = await instance.post('employee-login', {data: values} )
            dispatch(signinSucc())
            console.log(data);
            localStorage.setItem('token', data.token)
        }
        catch(error) {
            dispatch(signinFail())
            console.log("error:", error)
        }
    }
}


