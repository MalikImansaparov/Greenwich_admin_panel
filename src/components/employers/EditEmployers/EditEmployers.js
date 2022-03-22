import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../breadCrumbs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
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

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Имя обязателный'),
  last_name: Yup.string().required('Фамилия обязателный'),
  phone_number: Yup.string()
    .required('Номер обязателный')
    .min(9, 'Не правилный номер')
    .max(14, 'Не правилный номер'),
  courier_allowance: Yup.string().required('Логин обязателный'),
  role: Yup.string().required('Роль обязателный'),
  salary: Yup.number().required('зарплата обязателный'),
  password: Yup.string()
    .required('Пароль обязателный')
    .min(6, 'Небезопасный пароль'),
});

export const EditEmployers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const employers = useSelector((state) => state.employers.profile);
  // const pas = useSelector((state) => state.employers.profile.password);
  const [profile, setProfile] = useState(employers);
  console.log('selector', employers);
  console.log('state', profile);

  useEffect(() => {
    dispatch(AsyncGetProfile(id));
  }, []);

  useEffect(() => {
    if (employers) {
      setProfile({ ...employers });
    }
  }, [employers]);

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
      id: profile?.id,
      first_name: profile?.user.first_name,
      last_name: profile?.user.last_name,
      phone_number: profile?.user.phone_number,
      role: profile?.user.role,
      florist_allowance: profile?.florist_allowance,
      salary: profile?.salary,
      password: profile?.password,
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      dispatch(AsyncEditEmployers({ values, id }));
      setSubmitting(false);
      navigate(-1);
    },
    validationSchema: validationSchema,
  });
  const showPassword = values.password
    .toString()
    .split('$$')
    .slice(1, 2)
    .join();
  return (
    <Box>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Box sx={{ display: 'flex', mb: '20px' }}>
            <BreadCrumb />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
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
                  <Box sx={{ mb: '30px' }}>
                    <LabelWrapper>Надбавка</LabelWrapper>
                    <InputWrapper
                      name="florist_allowance"
                      onChange={handleChange}
                      type="text"
                      value={values.florist_allowance}
                    />
                    {errors.florist_allowance && touched.florist_allowance && (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          fontSize: '13px',
                          color: 'error.main',
                          mt: '12px',
                          ml: '14px',
                        }}
                      >
                        {errors.florist_allowance}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ mb: '30px' }}>
                    <LabelWrapper>Пароль</LabelWrapper>
                    <InputWrapper
                      name="password"
                      onChange={handleChange}
                      type="string"
                      value={showPassword}
                      onBlur={handleBlur}
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
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
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
    </Box>
  );
};
