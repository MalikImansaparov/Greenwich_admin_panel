import {
  API_DOMAIN,
  TOKEN_REFRESH_REQUEST,
  TOKEN_REFRESH_SUCCESS,
  TOKEN_REFRESH_FAILURE,
} from '../../store/constants';
import {store} from '../../store/store';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  },
});


axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access");

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    //extracting response and config objects
    const { response, config } = error;
    //checking if error is Aunothorized error
    if (response.status === 401) {
      let refreshToken = localStorage.getItem("refresh");
      if (refreshToken) {
        //if refresh token exists in local storage proceed
        try {
          //try refreshing token
          const data = await axiosInstance.post("token/refresh/", {
            refresh: refreshToken,
          });
          let accessToken = data.data.access;
          if (accessToken) {
            //if request is successful and token exists in response
            //store it in local storage
            localStorage.setItem("access", accessToken);
            //with new token retry original request
            config.headers["Authorization"] = `Bearer ${accessToken}`;
            return axiosInstance(config);
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
    return error;
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const originalRequest = error.config;
//     const token = localStorage.getItem('access');

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     if (error.response.status === 401) {
//       const refresh = localStorage.getItem('refresh');

//       store.dispatch({
//         type: TOKEN_REFRESH_REQUEST,
//         isFetching: true,
//       });

//       return axiosInstance
//         .post('/token/refresh', { refresh })
//         .then(({ data }) => {
//           store.dispatch({
//             type: TOKEN_REFRESH_SUCCESS,
//             isFetching: false,
//             isAuthenticated: true,
//             access: data.access,
//           });

//           localStorage.setItem('access', data.access);

//           axiosInstance.defaults.headers.common['Authorization'] = token
//             ? `Bearer ${token}`
//             : ' ';
//           originalRequest.headers['Authorization'] = token
//             ? `Bearer ${token}`
//             : ' ';

//           return axios(originalRequest);
//         })
//         .catch((err) => {
//           store.dispatch({
//             type: TOKEN_REFRESH_FAILURE,
//             isFetching: false,
//             isAuthenticated: false,
//             access: undefined,
//             refresh: undefined,
//             role: undefined,
//             errorMessage: err,
//           });
//         });
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
