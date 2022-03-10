import React from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import {InputWrap, InputWrapper, LabelWrapper, PhotoWrapper, TextareaWrapper,} from "../InputWrapper";
import {Item} from "../../../style";
import {GoBack} from "../../goBack";
import BreadCrumb from "../../breadCrumbs";
import Upload from "../../../assets/img/upload.svg";
import {Header} from "../../header/header";

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

export const EditProducts = () => {
    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, errors,touched, isSubmitting } = useFormik({
        initialValues: {
            photo: 'Добавить фото',
            name: '',
            category: '',
            price: '',
            description: '',
            count: '',
        },
        onSubmit: () => {
            navigate('/')
        },
        validationSchema
    });
    return (
        <Box mx={2}>
            <Header/>
            <BreadCrumb/>
            <Item sx={{width: '1060px'}}>
                <FormControl>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{my: '30px', display: 'grid', justifyContent: "center"}}>
                            <label htmlFor="contained-button-file">
                                <InputWrap accept="image/*" id="contained-button-file" multiple type="file" />
                                <PhotoWrapper>
                                    <Box component='img' src={Upload} alt='upload' />
                                    <Typography>Изменить фото</Typography>
                                </PhotoWrapper>
                            </label>
                            {errors.photo && touched.photo&& (
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        fontSize: '13px',
                                        color: 'error.main',
                                        mt: '12px',
                                        ml: '14px',
                                    }}
                                >
                                    {errors.photo}
                                </Typography>
                            )}
                        </Box>
                        <Box sx={{ mb: '30px' }}>
                            <LabelWrapper>Наименование</LabelWrapper>
                            <InputWrapper
                                name="name"
                                onChange={handleChange}
                                type="string"
                                value={values.name}
                                onBlur={handleBlur}
                                placeholder="Грунт для суккулентов"
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
                            <LabelWrapper>Категория</LabelWrapper>
                            <InputWrapper
                                name="category"
                                onChange={handleChange}
                                type="string"
                                value={values.category}
                                onBlur={handleBlur}
                                placeholder="Грунт"
                            />
                            {errors.category && touched.category && (
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        fontSize: '13px',
                                        color: 'error.main',
                                        mt: '12px',
                                        ml: '14px',
                                    }}
                                >
                                    {errors.category}
                                </Typography>
                            )}
                        </Box>
                        <Box sx={{ mb: '30px' }}>
                            <LabelWrapper>Цена</LabelWrapper>
                            <InputWrapper
                                name="price"
                                onChange={handleChange}
                                type="number"
                                value={values.price}
                                onBlur={handleBlur}
                                placeholder="1800"
                            />
                            {errors.price && touched.price && (
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        fontSize: '13px',
                                        color: 'error.main',
                                        mt: '12px',
                                        ml: '14px',
                                    }}
                                >
                                    {errors.price}
                                </Typography>
                            )}
                        </Box>
                        <Box sx={{ mb: '30px' }}>
                            <LabelWrapper>Описания</LabelWrapper>
                            <TextareaWrapper
                                name="password"
                                onChange={handleChange}
                                type="string"
                                value={values.description}
                                onBlur={handleBlur}
                                placeholder=""
                            />
                            {errors.description && touched.description && (
                                <LabelWrapper
                                    sx={{
                                        textAlign: 'left',
                                        fontSize: '13px',
                                        color: 'error.main',
                                        mt: '12px',
                                        ml: '14px',
                                    }}
                                >
                                    {errors.description}
                                </LabelWrapper>
                            )}
                        </Box>
                        <Box sx={{ mb: '30px' }}>
                            <LabelWrapper>Количество</LabelWrapper>
                            <InputWrapper
                                name="count"
                                onChange={handleChange}
                                type="password"
                                value={values.count}
                                onBlur={handleBlur}
                                placeholder="10"
                            />
                            {errors.count && touched.count && (
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        fontSize: '13px',
                                        color: 'error.main',
                                        mt: '12px',
                                        ml: '14px',
                                    }}
                                >
                                    {errors.count}
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

    );
};

