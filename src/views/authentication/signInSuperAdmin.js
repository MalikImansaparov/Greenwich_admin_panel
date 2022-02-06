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


export const SignInSuperAdmin = () => {
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
            email: '',
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
                        id="email"
                        name="email"
                        onChange={handleChange("email")}
                        type="email"
                        value={values.email}
                        onBlur={handleBlur}
                        label="Логин"
                        vaiant="outlined" />
                    {
                        errors.email && touched.email &&(<div>{errors.email}</div>)
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
