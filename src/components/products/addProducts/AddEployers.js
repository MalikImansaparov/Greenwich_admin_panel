import React from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import {InputWrapper, SelectWrapper, LabelWrapper, optionWrapper} from "../InputWrapper";
import {Item} from "../../../style";

const CustomButton = styled(Button)`
  height: 52px;
  width: 500px;
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
const validationSchema = Yup.object({
    password: Yup.string()
        .required('Пароль обязателный')
        .min(6, 'Не правилный пароль')
        .max(10, 'Не правилный пароль'),
    number: Yup.string()
        .required('Номер обязателный')
        .min(9, 'Не правилный номер')
        .max(12, 'Не правилный номер'),
})

export const AddEmployers = () => {

    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, errors,touched, isSubmitting } = useFormik({
        initialValues: {
            number: '',
            password: '',
        },
        onSubmit: () => {
            navigate('/')
        },
        validationSchema
    });
    return (
        <Item sx={{width: '1140px'}}>
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
                            name="surename"
                            onChange={handleChange}
                            type="string"
                            value={values.surename}
                            onBlur={handleBlur}
                            placeholder="Имансапаров"
                        />
                        {errors.surename && touched.surename && (
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.surename}
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
                            name="confirm"
                            onChange={handleChange}
                            type="password"
                            value={values.confirm}
                            onBlur={handleBlur}
                            placeholder="*******"
                        />
                        {errors.confirm && touched.confirm && (
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.confirm}
                            </Typography>
                        )}
                    </Box>
                    <CustomButton type="submit" disabled={isSubmitting}>
                        Создать
                    </CustomButton>
                </form>
            </FormControl>
        </Item>

    );
};
