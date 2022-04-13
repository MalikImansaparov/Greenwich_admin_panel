import React, { useState} from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import { useDispatch } from 'react-redux';
import { asyncLogin } from '../../../store/asyncAction/asyncAuth/login';
import 'react-toastify/dist/ReactToastify.css';
import {validationSchema} from "../validateForm";
import {TextFieldsWrapper} from "./style";
import {CustomButton} from "../../customButton";

export const SignInAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      phone_number: '',
      password: '',
    },

    onSubmit: (values, { setSubmitting }) => {
      dispatch(asyncLogin(values));
      setSubmitting(false);
      navigate('/home')
    },
    validationSchema,
  });

  return (
    <FormControl>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: '48px' }}>
          <TextFieldsWrapper
            id="outlined-number"
            name="phone_number"
            onChange={handleChange}
            type="tel"
            value={values.number}
            onBlur={handleBlur}
            label="Номер телефона"
          />
          {errors.phone_number && touched.phone_number && (
            <Typography
              sx={{
                textAlign: 'left',
                fontSize: '13px',
                color: 'error.main',
                mt: '12px',
                ml: '14px',
              }}
            >
              {errors.phone_number}
            </Typography>
          )}
        </Box>
        <Box sx={{ mb: '88px' }}>
          <TextFieldsWrapper
            id="outlined-password-input"
            label="Пароль"
            name="password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
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
              ),
            }}
          />
          {errors.password && touched.password && (
            <Typography
              sx={{
                textAlign: 'left',
                fontSize: '13px',
                color: 'error.main',
                mt: '12px',
                ml: '14px',
              }}
            >
              {errors.password}
            </Typography>
          )}
        </Box>
        <CustomButton type="submit" disabled={isSubmitting}>
          Войти
        </CustomButton>
      </form>
    </FormControl>
  );
};
