import React, { useEffect } from 'react';
import BreadCrumb from '../../breadCrumbs';
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { InputWrapper, SelectWrapper, LabelWrapper } from '../InputWrapper';
import { Item } from '../../../style';
import { GoBack } from '../../goBack';
import { useDispatch, useSelector } from 'react-redux';
import {
    AsyncEditEmployers,
    AsyncGetProfile,
} from '../../../store/asyncAction/asyncEmployers';
import { Header } from '../../header/header';
import { clearProfile } from '../../../store/actionType/actionTypes';
import CircularPreloader from '../../preloader';
import {CustomButton} from "../../customButton";

export const EditEmployers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const profile = useSelector((state) => state.employers.profile);

    useEffect(() => {
        dispatch(AsyncGetProfile(id));
        return () => {
            dispatch(clearProfile());
        };
    }, [dispatch, id]);

    const handleSubmit = (values) => {
        dispatch(AsyncEditEmployers({ values, id }));
        navigate(-1)
    };

    const initialValues = {
        first_name: !profile?.user.first_name ? 'Тимур' : profile?.user.first_name,
        last_name: !profile?.user.last_name ? 'Одинцев' : profile?.user.last_name,
        phone_number: profile?.user.phone_number,
        role: profile?.user.role,
        salary: profile?.salary,
    };

    if (!profile) {
        return (
            <Box mx={2}>
                <Header />
                <BreadCrumb />
                <Item
                    sx={{
                        width: '1060px',
                        height: '700px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CircularPreloader />
                </Item>
            </Box>
        );
    }

    return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Item
                            sx={{
                                width: '1060px',
                                height: '800px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FormControl>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={handleSubmit}
                                    validationSchema={validationSchema}
                                >
                                    {({
                                          handleSubmit,
                                          handleChange,
                                          handleBlur,
                                          values,
                                          errors,
                                          touched,
                                          isSubmitting,
                                      }) => (
                                        <>
                                            <form onSubmit={handleSubmit}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '28px',
                                                        fontWeight: 500,
                                                        textAlign: 'left',
                                                        my: '30px',
                                                    }}
                                                >
                                                    Изменение профиля
                                                </Typography>
                                                <Box sx={{ mb: '30px' }}>
                                                    <LabelWrapper>Имя</LabelWrapper>
                                                    <InputWrapper
                                                        name="first_name"
                                                        onChange={handleChange}
                                                        type="string"
                                                        value={values.first_name}
                                                    />
                                                    {errors.first_name && touched.first_name && (
                                                        <Typography
                                                            sx={{
                                                                textAlign: 'left',
                                                                fontSize: '13px',
                                                                color: 'error.main',
                                                                mt: '12px',
                                                                ml: '14px',
                                                            }}
                                                        >
                                                            {errors.first_name}
                                                        </Typography>
                                                    )}
                                                </Box>
                                                <Box sx={{ mb: '30px' }}>
                                                    <LabelWrapper>Фамилия</LabelWrapper>
                                                    <InputWrapper
                                                        name="last_name"
                                                        onChange={handleChange}
                                                        type="string"
                                                        value={values.last_name}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.last_name && touched.last_name && (
                                                        <Typography
                                                            sx={{
                                                                textAlign: 'left',
                                                                fontSize: '13px',
                                                                color: 'error.main',
                                                                mt: '12px',
                                                                ml: '14px',
                                                            }}
                                                        >
                                                            {errors.last_name}
                                                        </Typography>
                                                    )}
                                                </Box>
                                                <Box sx={{ mb: '30px' }}>
                                                    <LabelWrapper>Номер телефона</LabelWrapper>
                                                    <InputWrapper
                                                        name="phone_number"
                                                        onChange={handleChange}
                                                        type="text"
                                                        value={values.phone_number}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.phone_number && touched.phone_number && (
                                                        <Typography
                                                            sx={{
                                                                textAlign: 'left',
                                                                fontSize: '13px',
                                                                color: 'error.main',
                                                                mt: '12px',
                                                                ml: '14px',
                                                            }}
                                                        >
                                                            {errors.phone_number}
                                                        </Typography>
                                                    )}
                                                </Box>
                                                <Box sx={{ mb: '30px' }}>
                                                    <LabelWrapper>Роль</LabelWrapper>
                                                    <SelectWrapper
                                                        name="role"
                                                        type="string"
                                                        value={values.role}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        sx={{ display: 'block' }}
                                                    >
                                                        <option value="" label="Выберите роль" />
                                                        <option value="florist" label="Флорист" />
                                                        <option value="courier" label="Курьер" />
                                                        <option value="admin" label="Админ" />
                                                    </SelectWrapper>
                                                    {errors.role && touched.role && (
                                                        <Typography
                                                            sx={{
                                                                textAlign: 'left',
                                                                fontSize: '13px',
                                                                color: 'error.main',
                                                                mt: '12px',
                                                                ml: '14px',
                                                            }}
                                                        >
                                                            {errors.role}
                                                        </Typography>
                                                    )}
                                                </Box>
                                                <Box sx={{ mb: '30px' }}>
                                                    <LabelWrapper>Зарплата</LabelWrapper>
                                                    <InputWrapper
                                                        name="salary"
                                                        onChange={handleChange}
                                                        type="text"
                                                        value={values.salary}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.salary && touched.salary && (
                                                        <Typography
                                                            sx={{
                                                                textAlign: 'left',
                                                                fontSize: '13px',
                                                                color: 'error.main',
                                                                mt: '12px',
                                                                ml: '14px',
                                                            }}
                                                        >
                                                            {errors.salary}
                                                        </Typography>
                                                    )}
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <GoBack />
                                                    <CustomButton type="submit" disabled={isSubmitting}>
                                                        Сохранить
                                                    </CustomButton>
                                                </Box>
                                            </form>
                                        </>
                                    )}
                                </Formik>
                            </FormControl>
                        </Item>
                    </Box>
                </Box>
            </Box>
    );
};
