import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { InputWrapper, LabelWrapper } from '../InputWrapper';
import { Item } from '../../../style';
import { GoBack } from '../../goBack';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../../api/utils/axiosInstance';
import { AsyncGetProfile } from '../../../store/asyncAction/asyncEmployers';
import { clearProfile } from '../../../store/actionType/actionTypes';
import {validationSchema} from "../../signinAuth/validateForm";
import {CustomButton} from "../../customButton";

export const EditPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const profile = useSelector((state) => state.employers.profile);

  useEffect(() => {
    dispatch(AsyncGetProfile(id));
    return () => {
      dispatch(clearProfile());
    };
  }, [dispatch]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      phone_number: profile?.user.phone_number,
      new_password: '',
      new_password2: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      toast
        .promise(axiosInstance.post('reset-password', values), {
          pending: 'Ожидание...',
          success: 'Пароль успешно изменено',
          error: 'Произошла ошибка',
        })
        .then((data) => {
          console.log(data);
        });
      setSubmitting(false);
      navigate(-1);
    },
    validationSchema,
  });
  return (
    <Item sx={{ width: '1060px', borderRadius: '20px' }}>
      <FormControl>
        <form onSubmit={handleSubmit}>
          <Typography
            sx={{
              fontSize: '28px',
              fontWeight: 500,
              textAlign: 'left',
              my: '30px',
            }}
          >
            Изменение пароля
          </Typography>
          <Box sx={{ mb: '30px' }}>
            <LabelWrapper>Новый пароль</LabelWrapper>
            <InputWrapper
              name="new_password"
              onChange={handleChange}
              type="password"
              value={values.new_password}
              onBlur={handleBlur}
            />
            {errors.new_password && touched.new_password && (
              <LabelWrapper
                sx={{
                  textAlign: 'left',
                  fontSize: '13px',
                  color: 'error.main',
                  mt: '12px',
                  ml: '14px',
                }}
              >
                {errors.new_password}
              </LabelWrapper>
            )}
          </Box>
          <Box sx={{ mb: '30px' }}>
            <LabelWrapper>Потверждение пароля</LabelWrapper>
            <InputWrapper
              name="new_password2"
              onChange={handleChange}
              type="password"
              value={values.new_password2}
              onBlur={handleBlur}
            />
            {errors.new_password2 && touched.new_password2 && (
              <Typography
                sx={{
                  textAlign: 'left',
                  fontSize: '13px',
                  color: 'error.main',
                  mt: '12px',
                  ml: '14px',
                }}
              >
                {errors.new_password2}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <GoBack />
            <CustomButton type="submit" disabled={isSubmitting}>
              Сохранить
            </CustomButton>
          </Box>
        </form>
      </FormControl>
    </Item>
  );
};
