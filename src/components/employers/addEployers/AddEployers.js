import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InputWrapper, SelectWrapper, LabelWrapper } from '../InputWrapper';
import { Item } from '../../../style';
import { validationSchema } from '../../signinAuth/validateForm';
import { GoBack } from '../../goBack';
import { useDispatch, useSelector } from 'react-redux';
import {
  AsyncAddEmployers,
  AsyncEditEmployers,
} from '../../../store/asyncAction/asyncEmployers';
import BreadCrumb from '../../breadCrumbs';
import { Header } from '../../header/header';

const CustomButton = styled(Button)`
  height: 52px;
  width: 200px;
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

export const AddEmployers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

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
      first_name: '',
      last_name: '',
      phone_number: '',
      role: '',
      courier_allowance: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      dispatch(AsyncAddEmployers(values));
      setSubmitting(false);
      navigate(-1);
    },
    validationSchema,
  });
  return (
    <Box>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Box sx={{ display: 'flex', mb: '20px' }}>
            <BreadCrumb />
          </Box>
          <Item sx={{ width: '1060px' }}>
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
                  Создание аккаунта
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
                    type="tel"
                    value={values.phone_number}
                    placeholder=""
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
                  <LabelWrapper>Надбавка</LabelWrapper>
                  <InputWrapper
                    name="courier_allowance"
                    onChange={handleChange}
                    type="text"
                    value={values.courier_allowance}
                    placeholder=""
                  />
                  {errors.courier_allowance && touched.courier_allowance && (
                    <Typography
                      sx={{
                        textAlign: 'left',
                        fontSize: '13px',
                        color: 'error.main',
                        mt: '12px',
                        ml: '14px',
                      }}
                    >
                      {errors.courier_allowance}
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
                    <option value="Флорист" label="Флорист" />
                    <option value="Курьер" label="Курьер" />
                    <option value="Админ" label="Админ" />
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
                  <LabelWrapper>Пароль</LabelWrapper>
                  <InputWrapper
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    onBlur={handleBlur}
                    placeholder=""
                  />
                  {errors.password && touched.password && (
                    <LabelWrapper
                      sx={{
                        textAlign: 'left',
                        fontSize: '13px',
                        color: 'error.main',
                        mt: '12px',
                        ml: '14px',
                      }}
                    >
                      {errors.password}
                    </LabelWrapper>
                  )}
                </Box>
                <Box sx={{ mb: '30px' }}>
                  <LabelWrapper>Потверждение пароля</LabelWrapper>
                  <InputWrapper
                    name="confirmPassword"
                    onChange={handleChange}
                    type="password"
                    value={values.confirm}
                    onBlur={handleBlur}
                    placeholder=""
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Typography
                      sx={{
                        textAlign: 'left',
                        fontSize: '13px',
                        color: 'error.main',
                        mt: '12px',
                        ml: '14px',
                      }}
                    >
                      {errors.confirmPassword}
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
        </Box>
      </Box>
    </Box>
  );
};
