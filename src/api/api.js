import axios from "axios";

const apiURL = 'https://flowerdelivery5.herokuapp.com'

export const instance = axios.create({
    baseURL: apiURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})
//
// instance.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//     return config;
// })

// instance.interceptors.response.use((config) => {
//     return config;
// },async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             const response = await axios.get(`${apiURL}/token/refresh`, {withCredentials: true})
//             localStorage.setItem('token', response.data.accessToken);
//             return instance.request(originalRequest);
//         } catch (e) {
//             console.log('НЕ АВТОРИЗОВАН')
//         }
//     }
//     throw error;
// })

