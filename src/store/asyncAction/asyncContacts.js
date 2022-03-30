import {
  addContact, clearContact, editAbout,
  editContact,
  getAbout,
  getAllContacts,
  getContact, getContent,
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
      dispatch(getAllContacts(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
};

export const AsyncEditContact = (contact, id) => {
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

export const AsyncEditAbout = (formData, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.patch(
        `branches/about-us/${id}/`,
        formData
        // {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // }
      );
      dispatch(editAbout(data));
    } catch (e) {
      console.log('error:', e);
    }
  };
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
