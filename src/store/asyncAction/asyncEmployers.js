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
      dispatch(AsyncGetEmployers());
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncGetProfile = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`all-users/${id}/`);
      dispatch(getProfile(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditEmployers = ({ values, id }) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.patch(`all-users/${id}/`, values);
      dispatch(updateEmployers(data));
      dispatch(AsyncGetEmployers());
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncDeleteEmployers = (id) => {
  return (dispatch) => {
    axiosInstance
      .delete(`all-users/${id}`)
      .then(() => {
        dispatch(deleteEmployers(id));
        dispatch(AsyncGetEmployers());
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };
};

