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
} from '../../products/InputWrapper';
import { GoBack } from '../../goBack';
import Upload from '../../../assets/img/upload.svg';
import { Item } from '../../../style';
import { useDispatch } from 'react-redux';
import { AsyncAddContact } from '../../../store/asyncAction/asyncContacts';

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

export const ContactsAddCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    navigate(-1);
  };

  return (
    <Box>
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
    </Box>
  );
};

// import React, { useEffect } from 'react';
// import { useFormik } from 'formik';
// import { useNavigate, useParams } from 'react-router';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/system';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import * as Yup from 'yup';
// import {
//   InputWrap,
//   InputWrapper,
//   LabelWrapper,
//   PhotoWrapper,
//   ScheduleWrapper,
// } from '../../products/InputWrapper';
// import { GoBack } from '../../goBack';
// import Upload from '../../../assets/img/upload.svg';
// import { Item } from '../../../style';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   AsyncAddContact,
//   AsyncEditContact,
//   AsyncGetContact,
// } from '../../../store/asyncAction/asyncContacts';
// import BreadCrumb from '../../breadCrumbs';
// import CircularPreloader from '../../preloader';
// import { clearContact } from '../../../store/actionType/actionTypes';

// const CustomButton = styled(Button)`
//   height: 52px;
//   width: 250px;
//   background-color: #487349;
//   padding: 14px 130px;
//   border-radius: 20px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   border: none;
//   font-size: 18px;
//   font-weight: 600;
//   line-height: 24px;
//   text-align: center;
//   margin-bottom: 70px;
//   &:hover {
//     background-color: #9c9c9c;
//   }
// `;
// const validationSchema = Yup.object({
//   address: Yup.string().required('Укажите адресс'),
//   phone: Yup.string()
//     .required('Номер обязателный')
//     .min(9, 'Не правилный номер')
//     .max(14, 'Не правилный номер'),
//   open_from: Yup.string().required('Укажите график работы'),
// });

// export const ContactsAddCart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const {
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     setFieldValue,
//   } = useFormik({
//     initialValues: {
//       picture: '',
//       address: '',
//       phone: '',
//       open_from: '',
//       close_from: '',
//     },
//     onSubmit: (values, { setSubmitting }) => {
//       console.log(values);
//       let data = new FormData();
//       data.append('picture', values.picture);
//       data.append('phone', values.phone);
//       data.append('address', values.address);
//       data.append('open_from', values.open_from);
//       data.append('close_from', values.close_from);
//       dispatch(AsyncAddContact(data));
//       setSubmitting(false);
//     },
//     validationSchema,
//   });

//   return (
//     <Box>
//       <Item sx={{ width: '1060px' }}>
//         <FormControl>
//           <form onSubmit={handleSubmit}>
//             <Box sx={{ my: '30px', display: 'grid', justifyContent: 'center' }}>
//               <label htmlFor="picture">
//                 <InputWrap
//                   accept="image/*"
//                   name="picture"
//                   id="picture"
//                   multiple
//                   type="file"
//                   onChange={(event) => {
//                     setFieldValue('picture', event.currentTarget.files[0]);
//                   }}
//                 />
//                 <PhotoWrapper>
//                   <Box component="img" src={Upload} alt="upload" />
//                   <Typography>Добавить фото</Typography>
//                 </PhotoWrapper>
//               </label>
//               {errors.picture && touched.picture && (
//                 <Typography
//                   sx={{
//                     textAlign: 'left',
//                     fontSize: '13px',
//                     color: 'error.main',
//                     mt: '12px',
//                     ml: '14px',
//                   }}
//                 >
//                   {errors.picture}
//                 </Typography>
//               )}
//             </Box>
//             <Box sx={{ mb: '30px' }}>
//               <LabelWrapper>Адрес</LabelWrapper>
//               <InputWrapper
//                 name="address"
//                 onChange={handleChange}
//                 type="string"
//                 value={values.address}
//                 onBlur={handleBlur}
//               />
//               {errors.address && touched.address && (
//                 <Typography
//                   sx={{
//                     textAlign: 'left',
//                     fontSize: '13px',
//                     color: 'error.main',
//                     mt: '12px',
//                     ml: '14px',
//                   }}
//                 >
//                   {errors.address}
//                 </Typography>
//               )}
//             </Box>
//             <Box sx={{ mb: '30px' }}>
//               <LabelWrapper>Номер телефона</LabelWrapper>
//               <InputWrapper
//                 name="phone"
//                 onChange={handleChange}
//                 type="text"
//                 value={values.phone}
//                 onBlur={handleBlur}
//               />
//               {errors.phone && touched.phone && (
//                 <Typography
//                   sx={{
//                     textAlign: 'left',
//                     fontSize: '13px',
//                     color: 'error.main',
//                     mt: '12px',
//                     ml: '14px',
//                   }}
//                 >
//                   {errors.phone}
//                 </Typography>
//               )}
//             </Box>
//             <Box sx={{ mb: '30px' }}>
//               <LabelWrapper>Время работы</LabelWrapper>
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <Typography sx={{ ml: '10px' }}>C</Typography>
//                 <ScheduleWrapper
//                   name="open_from"
//                   onChange={handleChange}
//                   type="string"
//                   value={values.open_from}
//                   onBlur={handleBlur}
//                 />
//                 <Typography>До</Typography>
//                 <ScheduleWrapper
//                   name="close_from"
//                   onChange={handleChange}
//                   type="string"
//                   value={values.close_from}
//                   onBlur={handleBlur}
//                 />
//                 {errors.open_from && touched.open_from && (
//                   <Typography
//                     sx={{
//                       textAlign: 'left',
//                       fontSize: '13px',
//                       color: 'error.main',
//                       mt: '12px',
//                       ml: '14px',
//                     }}
//                   >
//                     {errors.open_from}
//                   </Typography>
//                 )}
//               </Box>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//               <GoBack />
//               <CustomButton type="submit" disabled={isSubmitting}>
//                 Сохранить
//               </CustomButton>
//             </Box>
//           </form>
//         </FormControl>
//       </Item>
//     </Box>
//   );
// };
