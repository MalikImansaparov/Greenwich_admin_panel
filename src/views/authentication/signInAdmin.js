import React, {useState} from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";

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
    background-color: #9C9C9C;
  }
`;
const validationSchema = Yup.object({
    password: Yup.string()
        .required('Пароль обязателный')
        .min(6, 'Не правилный пароль')
        .max(10, 'Не правилный пароль'),
    number: Yup.string()
        .required('Номер обязателный')
        .min(9, 'Не правилный номер')
        .max(12, 'Не правилный номер'),
})

export const SignInAdmin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, errors,touched, isSubmitting } = useFormik({
        initialValues: {
            number: '',
            password: '',
        },
        onSubmit: (values, {setSubmitting}) => {

            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
        validationSchema
    });
    return (
        <FormControl>
            <form onSubmit={handleSubmit}>
                <Box sx={{mb:'48px'}}>
                    <TextFieldsWrapper
                        id="outlined-number"
                        name="number"
                        onChange={handleChange}
                        type="number"
                        value={values.number}
                        onBlur={handleBlur}
                        label="Номер телефона"
                        vaiant="outlined"
                    />
                    {
                        errors.number && touched.number &&(<Typography sx={{
                            textAlign:'left',
                            fontSize: '13px',
                            color: 'error.main',
                            mt:'12px',
                            ml:'14px'}}>
                            {errors.number}
                        </Typography>)
                    }
                </Box>
                <Box sx={{mb:'88px'}}>
                    <TextFieldsWrapper
                        id="outlined-password-input"
                        label='Пароль'
                        name='password'
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
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
                            )
                        }}
                    />
                    {
                        errors.password && touched.password &&(<Typography sx={{
                            textAlign:'left',
                            fontSize: '13px',
                            color: 'error.main',
                            mt:'12px',
                            ml:'14px'}}>
                            {errors.password}
                        </Typography>)
                    }
                </Box>
                <CustomButton type='submit' disabled={isSubmitting}>Войти</CustomButton>
            </form>
        </FormControl>
    );
};
