import React from "react";
import { useFormik } from 'formik';
import {Outlet, useNavigate} from 'react-router';
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {InputWrapper, SelectWrapper, LabelWrapper,} from "../InputWrapper";
import {Item} from "../../../style";
import {validationSchema} from "../../authentication/validateForm";
import {Header} from "../../header/header";
import BreadCrumb from "../../breadCrumbs";
import {GoBack} from "../../goBack";

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
    background-color: #9C9C9C;
  }
`;

export const AddEmployers = () => {
    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, errors,touched, isSubmitting } = useFormik({
        initialValues: {
            name: '',
            surname: '',
            number: '',
            email: '',
            role: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: () => {
            navigate()
        },
        validationSchema: validationSchema
    });
    return (
        <Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Box>
                    <Box sx={{display: 'flex', mb: '20px'}}>
                        <BreadCrumb />
                    </Box>
                    <Item sx={{width: '1060px'}}>
                        <FormControl>
                            <form onSubmit={handleSubmit}>
                                <Typography sx={{
                                    fontSize: '28px',
                                    fontWeight: 500,
                                    textAlign: 'left',
                                    my: '30px'
                                }}>
                                    Создание аккаунта
                                </Typography>
                                <Box sx={{ mb: '30px' }}>
                                    <LabelWrapper>Имя</LabelWrapper>
                                    <InputWrapper
                                        name="name"
                                        onChange={handleChange}
                                        type="string"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        placeholder="Малик"
                                    />
                                    {errors.name && touched.name && (
                                        <Typography
                                            sx={{
                                                textAlign: 'left',
                                                fontSize: '13px',
                                                color: 'error.main',
                                                mt: '12px',
                                                ml: '14px',
                                            }}
                                        >
                                            {errors.name}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mb: '30px' }}>
                                    <LabelWrapper>Фамилия</LabelWrapper>
                                    <InputWrapper
                                        name="surname"
                                        onChange={handleChange}
                                        type="string"
                                        value={values.surname}
                                        onBlur={handleBlur}
                                        placeholder="Имансапаров"
                                    />
                                    {errors.surname && touched.surname && (
                                        <Typography
                                            sx={{
                                                textAlign: 'left',
                                                fontSize: '13px',
                                                color: 'error.main',
                                                mt: '12px',
                                                ml: '14px',
                                            }}
                                        >
                                            {errors.surname}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mb: '30px' }}>
                                    <LabelWrapper>Номер телефона</LabelWrapper>
                                    <InputWrapper
                                        name="number"
                                        onChange={handleChange}
                                        type="number"
                                        value={values.number}
                                        onBlur={handleBlur}
                                        placeholder="+996555112233"
                                    />
                                    {errors.number && touched.number && (
                                        <Typography
                                            sx={{
                                                textAlign: 'left',
                                                fontSize: '13px',
                                                color: 'error.main',
                                                mt: '12px',
                                                ml: '14px',
                                            }}
                                        >
                                            {errors.number}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mb: '30px' }}>
                                    <LabelWrapper>Электронная почта</LabelWrapper>
                                    <InputWrapper
                                        name="email"
                                        onChange={handleChange}
                                        type="email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        placeholder="greenwich@gmail.com"
                                    />
                                    {errors.email && touched.email && (
                                        <Typography
                                            sx={{
                                                textAlign: 'left',
                                                fontSize: '13px',
                                                color: 'error.main',
                                                mt: '12px',
                                                ml: '14px',
                                            }}
                                        >
                                            {errors.email}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mb: '30px' }}>
                                    <LabelWrapper>Роль</LabelWrapper>
                                    <SelectWrapper
                                        name="role"
                                        type='string'
                                        value={values.role}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        sx={{ display: 'block'}}
                                    >
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
                                        type="number"
                                        value={values.salary}
                                        onBlur={handleBlur}
                                        placeholder="30000"
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
                                    <LabelWrapper>Пароль</LabelWrapper>
                                    <InputWrapper
                                        name="password"
                                        onChange={handleChange}
                                        type="password"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        placeholder="*******"
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
                                        placeholder="*******"
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
                                <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                                    <GoBack/>
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
