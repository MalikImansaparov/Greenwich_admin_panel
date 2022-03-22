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
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access');

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
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
      let refreshToken = localStorage.getItem('refresh');
      if (refreshToken) {
        //if refresh token exists in local storage proceed
        try {
          //try refreshing token
          const data = await axiosInstance.post('token/refresh/', {
            refresh: refreshToken,
          });
          let accessToken = data.data.access;
          if (accessToken) {
            //if request is successful and token exists in response
            //store it in local storage
            localStorage.setItem('access', accessToken);
            //with new token retry original request
            config.headers['Authorization'] = `Bearer ${accessToken}`;
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

export default axiosInstance;
