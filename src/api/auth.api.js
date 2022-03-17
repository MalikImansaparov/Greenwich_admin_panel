import axiosInstance from './utils/axiosInstance';

export class AuthApi {
  static async login(phone_number, password) {
    try {
      const { data } = await axiosInstance.post('/employee-login', {
        phone_number,
        password,
      });

      axiosInstance.defaults.headers['Authorization'] = data.access;

      return data;
    } catch (error) {
      throw error;
    }
  }

}
