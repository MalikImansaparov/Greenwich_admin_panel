import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import {
    InputWrap,
    InputWrapper,
    LabelWrapper,
    PhotoWrap, PhotoWrapper,
    SelectWrapper, TextareaWrapper,
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
import {CustomButton} from "../../customButton";
import {validationSchema} from "../../signinAuth/validateForm";


export const EditProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const productInfo = useSelector((state) => state.products.care);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  useEffect(() => {
    dispatch(AsyncGetProduct(id));
    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, id]);

  const handleSubmit = (values, ) => {
    let data = new FormData();
          if (selectedImage)
              data.append('picture', selectedImage)
    data.append('choice', values.choice);
    data.append('price', values.price);
    data.append('name', values.name);
    data.append('quantity', values.quantity);
    data.append('description', values.description);
    dispatch(AsyncEditProduct(data, id));
    navigate(-1);
  };

  const initialValues = {
      name: productInfo?.name,
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
              handleSubmit,
            }) => (
              <>
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
                          onChange={ (e) => {
                              setSelectedImage(e.target.files[0])
                          }}
                        />
                        {imageUrl && selectedImage ? (
                          <PhotoWrap component="img" src={imageUrl} alt="" />
                        ) : (
                          <PhotoWrap
                            component="img"
                            src={values.picture}
                            alt=""
                          />
                        )}
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
                      name="name"
                      onChange={handleChange}
                      type="string"
                      value={values.name}
                      onBlur={handleBlur}
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
                  <Box sx={{ mb: '30px' }}>
                    <LabelWrapper>Описания</LabelWrapper>
                    <TextareaWrapper
                      name="description"
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
                  </Box>
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
              </>
            )}
          </Formik>
        </FormControl>
      </Item>
    </Box>
  );
};
