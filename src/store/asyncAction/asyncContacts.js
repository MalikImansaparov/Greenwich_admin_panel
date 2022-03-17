import {
    editContact, getAllContacts,
    getContact,
} from '../actionType/actionTypes';
import axiosInstance from "../../api/utils/axiosInstance";

export const AsyncAllContacts = () => {
    return async (dispatch) => {
        try {
            const {data} = await axiosInstance.get('contacts');
            dispatch(getAllContacts(data));
        } catch (e) {
            console.log('error:', e);
        }
    };
};

export const AsyncGetContact = () => {
    return async (dispatch) => {
        try {
            const {data} = await axiosInstance.get('contacts');
            dispatch(editContact(data));
        } catch (e) {
            console.log('error:', e);
        }
    };
};

export const AsyncEditContact = () => {
    return async (dispatch) => {
        try {
            const {data} = await axiosInstance.get('contacts');
            dispatch((data));
        } catch (e) {
            console.log('error:', e);
        }
    };
};
