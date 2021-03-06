import React, {useEffect, useState} from 'react';
import { Formik } from 'formik';
import {useNavigate, useParams} from 'react-router';
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
  TextareaWrapper,
} from '../../products/InputWrapper';
import { GoBack } from '../../goBack';
import { Item } from '../../../style';
import { useDispatch, useSelector } from 'react-redux';
import {AsyncEditAbout, AsyncGetAbout,
} from '../../../store/asyncAction/asyncContacts';
import BreadCrumb from '../../breadCrumbs';
import CircularPreloader from '../../preloader';
import {clearAbout,} from '../../../store/actionType/actionTypes';
import {Header} from "../../header/header";

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
  cursor: pointer;
  &: hover {
    background: #e6f0e6;
  }
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
  name: Yup.string().required('Заголовок обязательный'),
  description: Yup.string().required('Описание обязательный'),
});

export const AboutEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const about = useSelector((state) => state.contacts.content);
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

  useEffect(() => {
    dispatch(AsyncGetAbout(id));
    return dispatch(clearAbout());
  }, [dispatch, id]);

  const handleSubmit = (values) => {
    let data = new FormData();
      if (selectedImage)
          data.append('picture', fileBase64String)
    data.append('name', values.name);
    data.append('description', values.description);
    dispatch(AsyncEditAbout(data, id));
  };

  const initialValues = {
    picture: about?.picture,
    name: about?.name,
    description: about?.description,
  };

  if (!about) {
    return (
      <Box mx={2}>
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
    <Box>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Box sx={{ display: 'flex', mb: '20px' }}>
            <BreadCrumb />
          </Box>
      <Item sx={{ width: '1060px' }}>
        <FormControl>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({
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
                        onChange={async (e) => {
                            const file = e.target.files[0];
                            const base = await encodeFileBase64(file);
                            setFileBase64String(base);
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
                  <LabelWrapper>Заголовок</LabelWrapper>
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
    </Box>
      </Box>
    </Box>
  );
};
