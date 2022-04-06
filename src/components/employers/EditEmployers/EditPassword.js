import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InputWrapper, LabelWrapper } from '../InputWrapper';
import { Item } from '../../../style';
import { GoBack } from '../../goBack';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../../api/utils/axiosInstance';
import * as Yup from 'yup';
import { AsyncGetProfile } from '../../../store/asyncAction/asyncEmployers';
import { clearProfile } from '../../../store/actionType/actionTypes';

const CustomButton = styled(Button)`
  height: 52px;
  width: 250px;
  background-color: #487349;
  padding: 14px 130px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margin-bottom: 70px;
  &:hover {
    background-color: #9c9c9c;
  }
`;
const validationSchema = Yup.object().shape({
  new_password: Yup.string()
    .required('Пароль обязателный')
    .min(6, 'Небезопасный пароль'),
  new_password2: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Пароль не совпадает')
    .required('Потверждение обязателный'),
});

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
