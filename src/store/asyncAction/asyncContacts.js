import {
  addContact, clearContact, deleteEmployers, editAbout,
  editContact,
  getAbout,
  getAllContacts,
  getContact, getContent,
} from '../actionType/actionTypes';
import axiosInstance from '../../api/utils/axiosInstance';
import {AsyncGetEmployers} from "./asyncEmployers";
import {toast} from "react-toastify";

export const AsyncAllContacts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get('branches/branches/');
      dispatch(getAllContacts(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncGetContact = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`branches/branches/${id}/`);
      dispatch(getContact(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncAddContact = (formData) => {
  return (dispatch) => {
    toast.promise(
     axiosInstance.post(
        `branches/branches/`),
        formData,
        {
          headers: {'Content-Type': 'multipart/form-data',}
        }, {
      pending: 'Удаление...',
          success: 'Продукт удален',
        error: 'Возникла ошибка'
    }).then((data) => {
    dispatch(addContact(data));
    dispatch(getAllContacts(data));
    })
        .catch((error) => {
          console.log('error:', error);
        })
  };
};

export const AsyncEditContact = (contact, id) => {
  return (dispatch) => {
    toast.promise(
       axiosInstance.patch(
        `branches/branches/${id}/`), contact,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }}
          ).then((data) => {
         dispatch(editContact(data));
       })
           .catch((error) => {
             console.log('error:', error);
           })
  };
};

export const AsyncEditAbout = (formData, id) => {
  return (dispatch) => {
    toast.promise(
       axiosInstance.patch(
        `branches/about-us/${id}/`),
        formData, {
           headers: {
            'Content-Type': 'multipart/form-data',
           },}
      ).then((data) => {
        dispatch(editAbout(data));
      })
          .catch((error) => {
            console.log('error:', error);
          })
  }
};

export const AsyncAllAbout = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`branches/about-us/`);
      dispatch(getAbout(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncGetAbout = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`branches/about-us/${id}`);
      dispatch(getContent(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};
