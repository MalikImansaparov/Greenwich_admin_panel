import React,{useState, useEffect} from "react";
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';
import {
  DefaultPhoto,
  InputWrap,
  InputWrapper,
  LabelWrapper, PhotoWrap, PhotoWrapper,

  SelectWrapper,
  TextareaWrapper,
} from '../InputWrapper';
import { Item } from '../../../style';
import { GoBack } from '../../goBack';
import BreadCrumb from '../../breadCrumbs';
import Upload from '../../../assets/img/upload.svg';
import { AsyncAddEmployers } from '../../../store/asyncAction/asyncEmployers';
import { AsyncAddProduct } from '../../../store/asyncAction/asyncProducts';
import axiosInstance from '../../../api/utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { Header } from '../../header/header';

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

const validationSchema = Yup.object({
  choice: Yup.string().required('Выберите категорию'),
  description: Yup.string().required('Названия обязателный'),
  price: Yup.string().required('Цена обязателный'),
  quantity: Yup.string().required('Количество обязателный'),
});

export const AddProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: {
      picture: '',
      choice: '',
      price: '',
      description: '',
      quantity: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      let data = new FormData();
      data.append('picture', values.picture);
      data.append('choice', values.choice);
      data.append('price', values.price);
      data.append('description', values.description);
      data.append('quantity', values.quantity);
      dispatch(AsyncAddProduct(data));
      setSubmitting(false);
      navigate(-1);
    },
    validationSchema,
  });
  return (
    <Box mx={1}>
      <Header />
      <BreadCrumb />
      <Item sx={{ width: '1060px' }}>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: '30px', display: 'grid', justifyContent: 'center' }}>
              <label htmlFor="contained-button-file">
                <PhotoWrapper>
                  <InputWrap
                      name="picture"
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(event) => {
                        setFieldValue(
                            'picture',
                            event.currentTarget.files[0]
                        );
                        setSelectedImage(event.target.files[0])
                      }}
                  />
                  { imageUrl && selectedImage ?
                      <Box>
                        <PhotoWrap component="img" src={imageUrl} alt='' />
                        <Typography>Изменить фото</Typography>
                      </Box>:
                      <Box>
                        <DefaultPhoto component="img" src={Upload} alt="" />
                        <Typography>Добавить фото</Typography>
                      </Box>
                  }
                </PhotoWrapper>
              </label>
              {errors.picture && touched.picture && (
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '13px',
                    color: 'error.main',
                    mt: '12px',
                    ml: '14px',
                  }}
                >
                  {errors.picture}
                </Typography>
              )}
            </Box>
            <Box sx={{ mb: '30px' }}>
              <LabelWrapper>Наименование</LabelWrapper>
              <InputWrapper
                name="description"
                onChange={handleChange}
                type="string"
                value={values.description}
                onBlur={handleBlur}
              />
              {errors.description && touched.description && (
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '13px',
                    color: 'error.main',
                    mt: '12px',
                    ml: '14px',
                  }}
                >
                  {errors.description}
                </Typography>
              )}
            </Box>
            <Box sx={{ mb: '30px' }}>
              <LabelWrapper>Категория</LabelWrapper>
              <SelectWrapper
                name="choice"
                type="string"
                value={values.choice}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ display: 'block' }}
              >
                <option value="" label="Выберите категорию" />
                <option value="Удобрения" label="Удобрения" />
                <option value="Средства защиты" label="Средства защиты" />
                <option value="Грунт" label="Грунт" />
                <option value="Почва" label="Почва" />
              </SelectWrapper>
              {errors.choice && touched.choice && (
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '13px',
                    color: 'error.main',
                    mt: '12px',
                    ml: '14px',
                  }}
                >
                  {errors.choice}
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
            {/* <Box sx={{ mb: '30px' }}>
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
            </Box> */}
            <Box sx={{ mb: '30px' }}>
              <LabelWrapper>Количество</LabelWrapper>
              <InputWrapper
                name="quantity"
                onChange={handleChange}
                type="text"
                value={values.quantity}
                onBlur={handleBlur}
              />
              {errors.quantity && touched.quantity && (
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '13px',
                    color: 'error.main',
                    mt: '12px',
                    ml: '14px',
                  }}
                >
                  {errors.quantity}
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
  );
};
