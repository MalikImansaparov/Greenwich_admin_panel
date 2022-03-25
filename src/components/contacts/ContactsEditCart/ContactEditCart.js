import React, {useEffect} from "react";
import { useFormik } from 'formik';
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
} from '../../products/InputWrapper';
import { GoBack } from '../../goBack';
import Upload from '../../../assets/img/upload.svg';
import { Item } from '../../../style';
import { useDispatch, useSelector } from 'react-redux';
import {
  AsyncEditContact,
  AsyncGetContact,
} from '../../../store/asyncAction/asyncContacts';

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
  address: Yup.string()
    .required('Укажите адресс'),
  number: Yup.string()
    .required('Номер обязателный')
    .min(9, 'Не правилный номер')
    .max(14, 'Не правилный номер'),
});

export const ContactsEditCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const { id } = useParams();

  // const loadData = contacts?.map((cont) => {
  //   return {
  //     id: cont?.id,
  //     address: cont?.address,
  //     phone: cont?.phone,
  //     open: cont?.open_from,
  //     closed: cont?.closed_from,
  //   };
  // });

  useEffect(() => {
    dispatch(AsyncGetContact(id));
  }, []);

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
      id: contacts?.id,
      address: contacts?.address,
      phone: contacts?.phone,
      open: contacts?.open_from,
      close: contacts?.closed_from,
    },
    onSubmit: (values, { setSubmitting }) => {
      let data = new FormData();
      data.append('picture', values.picture);
      data.append('phone', values.phone);
      data.append('address', values.address);
      data.append('open_from', values.open);
      data.append('close_from', values.close);
      dispatch(AsyncEditContact(values, id));
      setSubmitting(false);
      navigate(-1);
    },
    validationSchema,
  });
  return (
    <Box>
      <Item sx={{ width: '1060px' }}>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: '30px', display: 'grid', justifyContent: 'center' }}>
              <label htmlFor="photo">
                <InputWrap
                  accept="image/*"
                  name="photo"
                  id="photo"
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
            <Box sx={{ mb: '30px' }}>
              <LabelWrapper>Адрес</LabelWrapper>
              <InputWrapper
                name="name"
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
                name="number"
                onChange={handleChange}
                type="number"
                value={values.number}
                onBlur={handleBlur}
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
              <LabelWrapper>Время работы</LabelWrapper>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ ml: '10px' }}>C</Typography>
                <ScheduleWrapper
                  name="open"
                  onChange={handleChange}
                  type="string"
                  value={values.open}
                  onBlur={handleBlur}
                />
                <Typography>До</Typography>
                <ScheduleWrapper
                  name="close"
                  onChange={handleChange}
                  type="string"
                  value={values.close}
                  onBlur={handleBlur}
                />
                {errors.open && touched.open && (
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontSize: '13px',
                      color: 'error.main',
                      mt: '12px',
                      ml: '14px',
                    }}
                  >
                    {errors.open}
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
        </FormControl>
      </Item>
    </Box>
  );
};
