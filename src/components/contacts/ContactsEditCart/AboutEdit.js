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
  PhotoWrapper,
  ScheduleWrapper,
  TextareaWrapper,
} from '../../products/InputWrapper';
import { GoBack } from '../../goBack';
import Upload from '../../../assets/img/upload.svg';
import { Item } from '../../../style';
import { useDispatch, useSelector } from 'react-redux';
import {
  AsyncEditAbout,
  AsyncEditContact,
  AsyncGetAbout,
  AsyncGetContact,
} from '../../../store/asyncAction/asyncContacts';
import BreadCrumb from '../../breadCrumbs';
import CircularPreloader from '../../preloader';
import { clearContact } from '../../../store/actionType/actionTypes';

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
  address: Yup.string().required('Укажите адресс'),
  phone: Yup.string()
    .required('Номер обязателный')
    .min(9, 'Не правилный номер')
    .max(14, 'Не правилный номер'),
});

export const AboutEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contact);
  const { id } = useParams();
  console.log(contacts);

  useEffect(() => {
    dispatch(AsyncGetAbout(id));
    return dispatch(clearContact());
  }, [dispatch, id]);

  // const initialValues = {
  //   id: contacts?.id,
  //   address: contacts?.address,
  //   phone: contacts?.phone,
  //   open: contacts?.open_from,
  //   close: contacts?.closed_from,
  // };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(clearContact());
    let data = new FormData();
    data.append('picture', values.picture);
    data.append('phone', values.phone);
    data.append('address', values.address);
    dispatch(AsyncEditAbout(values, id));
    setSubmitting(false);
    navigate(-1);
  };

  if (!contacts) {
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
      <Item sx={{ width: '1060px' }}>
        <FormControl>
          <Formik
            initialValues={contacts}
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
                  <label htmlFor="photo">
                    <InputWrap
                      accept="image/*"
                      name="photo"
                      id="photo"
                      multiple
                      type="file"
                      onChange={(event) => {
                        setFieldValue('picture', event.currentTarget.files[0]);
                      }}
                    />
                    <PhotoWrapper>
                      <Box component="img" src={Upload} alt="upload" />
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
  );
};
