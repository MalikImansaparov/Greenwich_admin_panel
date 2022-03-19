import {
    addEmployers, deleteEmployers, employersFail, employersStart,
    getEmployers, getProfile,
    ordersFail,
    ordersStart, updateEmployers,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncGetEmployers = () => {
  return async (dispatch) => {
    dispatch(employersStart());
    try {
      const { data } = await axiosInstance.get('all-users');
      console.log(data);
      dispatch(getEmployers(data));
    } catch (e) {
      dispatch(employersFail());
      console.log('error:', e);
    }
  };
};

export const AsyncAddEmployers = (values) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(`employee-register`, values);
      console.log(data);
      dispatch(addEmployers(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

// {first_name, last_name, phone_number, salary, email, role, password}
export const AsyncGetProfile = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`all-users/${id}`);
      dispatch(getProfile(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditEmployers = (values, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.put(
        `employee-register/${id}`,
        values
      );
      dispatch(updateEmployers(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncDeleteEmployers = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.delete(`all-users/${id}`);
      dispatch(deleteEmployers(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

