import React from "react";
import { useFormik } from 'formik';
import {useNavigate, useParams} from 'react-router';
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import {InputWrap, InputWrapper, LabelWrapper, PhotoWrapper, SelectWrapper, TextareaWrapper,} from "../InputWrapper";
import {Item} from "../../../style";
import {GoBack} from "../../goBack";
import BreadCrumb from "../../breadCrumbs";
import Upload from "../../../assets/img/upload.svg";
import {AsyncAddEmployers} from "../../../store/asyncAction/asyncEmployers";
import {AsyncAddProduct} from "../../../store/asyncAction/asyncProducts";
import {useDispatch} from "react-redux";

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
  description: Yup.string()
    .required('Пароль обязателный')
    .min(6, 'Не правилный пароль')
    .max(20, 'Не правилный пароль'),
  price: Yup.string().required('Цена обязателный'),
});

export const AddProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      photo: '',
      category: '',
      price: '',
      description: '',
      // count: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      dispatch(AsyncAddProduct(values));
      setSubmitting(false);
      navigate(-1);
    },
    validationSchema,
  });
  return (
    <Box mx={1}>
      <BreadCrumb />
      <Item sx={{ width: '1060px' }}>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: '30px', display: 'grid', justifyContent: 'center' }}>
              <label htmlFor="contained-button-file">
                <InputWrap
                  name="photo"
                  // value={values.photo}
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <PhotoWrapper>
                  <Box component="img" src={Upload} alt="upload" />
                  <Typography>Добавить фото</Typography>
                </PhotoWrapper>
              </label>
              {errors.photo && touched.photo && (
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
            {/* <Box sx={{ mb: '30px' }}>
                <LabelWrapper>Наименование</LabelWrapper>
                <InputWrapper
                  name="name"
                  onChange={handleChange}
                  type="string"
                  value={values.name}
                  onBlur={handleBlur}
                  placeholder=""
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
              </Box> */}
            <Box sx={{ mb: '30px' }}>
              <LabelWrapper>Категория</LabelWrapper>
              <SelectWrapper
                name="category"
                type="string"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ display: 'block' }}
              >
                <option value="Удобрения" label="Удобрения" />
                <option value="Средства защиты" label="Средства защиты" />
                <option value="Грунт" label="Грунт" />
                <option value="Почва" label="Почва" />
              </SelectWrapper>
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
                type="text"
                value={values.price}
                onBlur={handleBlur}
                placeholder=""
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
                name="description"
                onChange={handleChange}
                type="text"
                value={values.description}
                onBlur={handleBlur}
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
            {/* <Box sx={{ mb: '30px' }}>
                <LabelWrapper>Количество</LabelWrapper>
                <InputWrapper
                  name="count"
                  onChange={handleChange}
                  type="text"
                  value={values.count}
                  onBlur={handleBlur}
                  placeholder=""
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
              </Box> */}
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
  );
};
