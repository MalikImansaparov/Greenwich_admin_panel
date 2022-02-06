import {styled} from "@mui/system";
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router";
import {useFormik} from "formik";
import Box from '@mui/material/Box';
import { CustomButton } from '../../components/signInButton';
import InputMask from 'react-input-mask';
import React, {useState} from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const SignInAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const TextFieldsWrapper = styled(TextField)`
   width: 320px;
   height: 48px;
   fieldset {
    border-radius: 20px;
  }
`;
  const CustomButton = styled(Button)`
  height: 52px;
  width: 320px;
  background-color: #9C9C9C;
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
  marginTop: 110px;
  &:hover {
    background-color: #487349;
  }
`;
  const navigate = useNavigate()
  const { handleSubmit, handleChange,handleBlur, values, errors,touched } = useFormik({
    initialValues: {
      phone: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
      <FormControl>
        <form onSubmit={handleSubmit}>
          <Box sx={{mb:'58px'}}>
            <TextFieldsWrapper
                required
                id="phone"
                name="phone"
                onChange={handleChange("phone")}
                type="number"
                value={values.phone}
                onBlur={handleBlur}
                label="Номер телефона"
                vaiant="outlined" />
            {
              errors.phone && touched.phone &&(<div>{errors.phone}</div>)
            }
          </Box>
          <Box sx={{mb:'108px'}}>
            <TextFieldsWrapper
                required
                label='Пароль'
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChange("password")}
                value={values.password}
                onBlur={handleBlur}
                InputProps={{
                  endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                  )
                }}
            />
          </Box>
          <CustomButton type='submit'>Войти</CustomButton>
        </form>
      </FormControl>
  );
};


























// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from "yup";
//
// const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2, 'Too Short!')
//         .max(70, 'Too Long!')
//         .required('Required'),
//     email: Yup.string()
//         .email('Invalid email')
//         .required('Required'),
// });
//
// export const SignIn = () => (
//     <div>
//         <h1>Signup</h1>
//         <Formik
//             initialValues={{
//                 name: '',
//                 email: '',
//             }}
//             validationSchema={SignupSchema}
//             onSubmit={values => {
//                 // same shape as initial values
//                 console.log(values);
//             }}
//         >
//             {({ errors, touched }) => (
//                 <Form>
//                     <Field name="name"  />
//                     {errors.name && touched.name ? (
//                         <div>{errors.name}</div>
//                     ) : null}
//                     <ErrorMessage name="name" />
//                     <Field name="email" type="email" />
//                     {errors.email && touched.email ? (
//                         <div>{errors.email}</div>
//                     ) : null}
//                     <ErrorMessage name="email" />
//                     <button type="submit">Submit</button>
//                 </Form>
//             )}
//         </Formik>
//     </div>
// );
