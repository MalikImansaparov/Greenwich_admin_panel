import React,{useState, useEffect} from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import {
  DefaultPhoto,
  InputWrap,
  InputWrapper,
  LabelWrapper, PhotoWrap, PhotoWrapper,
  SelectWrapper,
} from '../InputWrapper';
import { Item } from '../../../style';
import { GoBack } from '../../goBack';
import BreadCrumb from '../../breadCrumbs';
import Upload from '../../../assets/img/upload.svg';
import { AsyncAddProduct } from '../../../store/asyncAction/asyncProducts';
import { useDispatch } from 'react-redux';
import { Header } from '../../header/header';
import {CustomButton} from "../../customButton";
import {validationSchema} from "../../signinAuth/validateForm";

export const AddProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [fileBase64String, setFileBase64String] = useState("");


  const encodeFileBase64 = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        const Base64 = reader.result;
        console.log(Base64);
        setFileBase64String(Base64);
      };
      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
  };

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
      if (selectedImage)
        data.append('picture', selectedImage)
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
                      onChange={async (e) => {
                        const file = e.target.files[0];
                        const base = await encodeFileBase64(file);
                        setFileBase64String(base);
                        setSelectedImage(e.target.files[0])
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
