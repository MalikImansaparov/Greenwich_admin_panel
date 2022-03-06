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
    contentType: 'application/json',
    accept: 'application/json',
    'X-Access-Token': localStorage.getItem('access'),
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const refresh = localStorage.getItem('refresh');

      store.dispatch({
        type: TOKEN_REFRESH_REQUEST,
        isFetching: true,
      });

      return axiosInstance
        .post('/refresh', { refresh })
        .then(({ data }) => {
          store.dispatch({
            type: TOKEN_REFRESH_SUCCESS,
            isFetching: false,
            isAuthenticated: true,
            access: data.access,
          });

          localStorage.setItem('access', data.access);

          axiosInstance.defaults.headers['X-Access-Token'] = data.access;
          originalRequest.headers['X-Access-Token'] = data.access;

          return axios(originalRequest);
        })
        .catch((err) => {
          store.dispatch({
            type: TOKEN_REFRESH_FAILURE,
            isFetching: false,
            isAuthenticated: false,
            access: undefined,
            refresh: undefined,
              role: undefined,
            errorMessage: err,
          });
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;