import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';
import {
  InputWrap,
  InputWrapper,
  LabelWrapper,
  PhotoWrap,
} from '../InputWrapper';
import { Item } from '../../../style';
import { GoBack } from '../../goBack';
import BreadCrumb from '../../breadCrumbs';
import { Header } from '../../header/header';
import { useDispatch, useSelector } from 'react-redux';
import {
  AsyncEditProduct,
  AsyncGetProduct,
} from '../../../store/asyncAction/asyncProducts';
import { clearProduct } from '../../../store/actionType/actionTypes';
import CircularPreloader from '../../preloader';

const PhotoWrapper = styled('span')`
  width: 230px;
  height: 210px;
  display: block;
  justify-content: center;
  border-radius: 20px;
  padding-top: 10px;
  border: 1px solid #000000;
  font-weight: 600;
  color: #000000;
`;

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
  picture: Yup.string().required('Загрузите картину'),
  description: Yup.string().required('Описание обязателный'),
  choice: Yup.string().required('Выберите категорию'),
  price: Yup.number().required('Укажите цену'),
  quantity: Yup.number().required('Укажите количество'),
});

export const EditProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const productInfo = useSelector((state) => state.products.care);

  useEffect(() => {
    dispatch(AsyncGetProduct(id));
    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, id]);

  const handleSubmit = (values) => {
    let data = new FormData();
    data.append('picture', values.picture);
    data.append('choice', values.choice);
    data.append('price', values.price);
    data.append('description', values.description);
    data.append('quantity', values.quantity);
    dispatch(AsyncEditProduct({ data, id }));
    navigate(-2);
  };

  // onSubmit={(values) => {
  //             let data = new FormData();
  //             data.append('picture', values.picture);
  //             data.append('choice', values.choice);
  //             data.append('price', values.price);
  //             data.append('description', values.description);
  //             data.append('quantity', values.quantity);
  //             dispatch(AsyncEditProduct({ data, id }));
  //             navigate(-1);
  //           }}

  const initialValues = {
    picture: productInfo?.picture,
    choice: productInfo?.choice,
    price: productInfo?.price,
    description: productInfo?.description,
    quantity: productInfo?.quantity,
  };

  if (!productInfo) {
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
    <Box mx={2}>
      <Header />
      <BreadCrumb />
      <Item sx={{ width: '1060px' }}>
        <FormControl>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    my: '30px',
                    display: 'grid',
                    justifyContent: 'center',
                  }}
                >
                  <label htmlFor="contained-button-file">
                    <PhotoWrapper>
                      <InputWrap
                        name="picture"
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <PhotoWrap component="img" src={values.picture} alt="" />
                      <Typography>Изменить фото</Typography>
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
                  <InputWrapper
                    name="choice"
                    onChange={handleChange}
                    type="string"
                    value={values.choice}
                    onBlur={handleBlur}
                  />
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
                    type="number"
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
                name="password"
                onChange={handleChange}
                type="string"
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
            )}
          </Formik>
        </FormControl>
      </Item>
    </Box>
  );
};
