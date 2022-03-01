import axiosInstance from './utils/axiosInstance';
export class AuthApi {
  static async login(phone_number, password) {
    try {
      const { data } = await axiosInstance.post('/employee-login', {
        phone_number,
        password,
      });

      axiosInstance.defaults.headers['X-Access-Token'] = data.access;

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserInfo() {
    try {
      const { data } = await axiosInstance.get(`/me`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
