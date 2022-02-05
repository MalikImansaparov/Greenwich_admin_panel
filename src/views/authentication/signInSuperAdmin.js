import { useFormik } from 'formik';
import { validate } from './rules';
import { useNavigate } from 'react-router';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {CustomButton} from "../../components/signInButton";
import Password from "../../components/password";
import { styled } from '@mui/system';

export const SignInSuperAdmin = () => {
    const TextFieldsWrapper = styled(TextField)`
  width: 320px;
  height: 48px;
  fieldset {
    border-radius: 20px;
  }
`;
    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     height: 600,
    //     lineHeight: '60px',
    // }));
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validate,
        onSubmit: () => {
        navigate('/home/main')
            alert('You successfull registration');
        }
    });
            return (
            <Box
            >
                <form onSubmit={formik.handleSubmit}>
                     <Box sx={{mb:'58px'}}>
                         <TextFieldsWrapper
                             fullWidth
                             id="name"
                             // value={formik.values.name}
                             // onChange={formik.handleChange}
                             // error={formik.touched.name && Boolean(formik.errors.name)}
                             // helperText={formik.touched.name && formik.errors.name}
                             label="Логин" type='string' name='name' vaiant="outlined" />
                     </Box>
                      <Box sx={{mb:'108px'}}>
                          <Password fullWidth/>
                      </Box>

                        <CustomButton>Войти</CustomButton>

                </form>
            </Box>
            );
};



