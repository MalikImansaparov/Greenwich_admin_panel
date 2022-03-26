import {
  addContact,
  editContact,
  getAbout,
  getAllContacts,
  getContact,
} from '../actionType/actionTypes';
import axiosInstance from '../../api/utils/axiosInstance';

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
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(
        `branches/branches/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch(addContact(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditContact = ({ contact, id }) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.patch(
        `branches/branches/${id}/`,
        contact,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch(editContact(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditAbout = ({ contact, id }) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.patch(
        `branches/branches/${id}/`,
        contact,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch(data);
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncGetAbout = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(`branches/branches/${id}/`);
      dispatch(getAbout(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};
