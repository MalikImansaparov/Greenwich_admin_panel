import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import {
  DefaultPhoto,
  InputWrap,
  InputWrapper,
  LabelWrapper, PhotoWrap,
  PhotoWrapper,
  ScheduleWrapper,
} from '../../products/InputWrapper';
import { GoBack } from '../../goBack';
import Upload from '../../../assets/img/upload.svg';
import { Item } from '../../../style';
import { useDispatch } from 'react-redux';
import { AsyncAddContact } from '../../../store/asyncAction/asyncContacts';
import {Header} from "../../header/header";
import {Divider} from "@mui/material";
import BreadCrumb from "../../breadCrumbs";
import {CustomButton} from "../../customButton";
import Typography from "@mui/material/Typography";
import {validationSchema} from "../../signinAuth/validateForm";

export const ContactsAddCart = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const initialValues = {
    picture: '',
    address: '',
    phone: '',
    open_from: '',
    close_from: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    let data = new FormData();
    data.append('picture', values.picture);
    data.append('phone', values.phone);
    data.append('address', values.address);
    data.append('open_from', values.open);
    data.append('close_from', values.close);
    dispatch(AsyncAddContact(data));
    setSubmitting(false);
  };

  return (
    <Box>
      <Header/>
      <BreadCrumb/>
      <Item sx={{ width: '1060px' }}>
        <FormControl>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({
              setFieldValue,
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{ my: '30px', display: 'grid', justifyContent: 'center' }}
                >
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
                <Box sx={{ mb: '30px' }}>
                  <LabelWrapper>Адрес</LabelWrapper>
                  <InputWrapper
                    name="address"
                    onChange={handleChange}
                    type="string"
                    value={values.address}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && (
                    <Typography
                      sx={{
                        textAlign: 'left',
                        fontSize: '13px',
                        color: 'error.main',
                        mt: '12px',
                        ml: '14px',
                      }}
                    >
                      {errors.address}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ mb: '30px' }}>
                  <LabelWrapper>Номер телефона</LabelWrapper>
                  <InputWrapper
                    name="phone"
                    onChange={handleChange}
                    type="number"
                    value={values.phone}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && (
                    <Typography
                      sx={{
                        textAlign: 'left',
                        fontSize: '13px',
                        color: 'error.main',
                        mt: '12px',
                        ml: '14px',
                      }}
                    >
                      {errors.phone}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ mb: '30px' }}>
                  <LabelWrapper>Время работы</LabelWrapper>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ ml: '10px' }}>C</Typography>
                    <ScheduleWrapper
                      name="open_from"
                      onChange={handleChange}
                      type="string"
                      value={values.open_from}
                      onBlur={handleBlur}
                    />
                    <Typography>До</Typography>
                    <ScheduleWrapper
                      name="close_from"
                      onChange={handleChange}
                      type="string"
                      value={values.close_from}
                      onBlur={handleBlur}
                    />
                    {errors.open_from && touched.open_from && (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          fontSize: '13px',
                          color: 'error.main',
                          mt: '12px',
                          ml: '14px',
                        }}
                      >
                        {errors.open_from}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
      <Divider sx={{ width: '1060px', my: '30px' }} />
    </Box>
  );
};
