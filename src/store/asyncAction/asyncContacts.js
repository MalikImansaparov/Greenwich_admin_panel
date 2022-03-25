import {
    editContact, getAllContacts,
    getContact,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";

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
      dispatch(editContact(data));
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
      dispatch(data);
    } catch (e) {
      console.log('error:', e);
    }
  };
};
