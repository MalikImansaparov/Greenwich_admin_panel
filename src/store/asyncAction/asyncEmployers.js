import {
  addEmployers, deleteEmployers, employersFail, employersStart, getCourier,
  getEmployers, getProfile, updateEmployers,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";
import  {toast}  from "react-toastify";

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
  return (dispatch) => {
    toast
      .promise(axiosInstance.post('employee-register', values), {
        pending: 'Ожидание...',
        success: 'Успешно добавлено',
        error: 'Возникла ошибка',
      })
      .catch((error) => {
        console.log('error:', error);
      })
      .then((data) => {
        dispatch(addEmployers(data));
        dispatch(AsyncGetEmployers());
      });
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
  return (dispatch) => {
    toast
      .promise(axiosInstance.patch(`all-users/${id}/`, values), {
        pending: 'Ожидание...',
        success: 'Успешно изменено',
        error: 'Возникла ошибка',
      })
      .then((data) => {
        dispatch(updateEmployers([data]));
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };
};

export const AsyncDeleteEmployers = (id) => {
  return (dispatch) => {
    toast
      .promise(axiosInstance.delete(`all-users/${id}`), {
        pending: 'Удаление...',
        success: 'Успешно удалено',
        error: 'Возникла ошибка',
      })
      .then(() => {
        dispatch(deleteEmployers(id));
        dispatch(AsyncGetEmployers());
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };
};

export const AsyncGetCourier = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`courier-profile`);
      dispatch(getCourier(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

