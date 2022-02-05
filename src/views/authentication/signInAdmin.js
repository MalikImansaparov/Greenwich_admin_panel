import {styled} from "@mui/system";
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router";
import {useFormik} from "formik";
import {validate} from "./rules";
import Box from "@mui/material/Box";
import Password from "../../components/password";
import {CustomButton} from "../../components/signInButton";

export const SignInAdmin = () => {
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
            phoneNumber: '',
            password: '',
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
                        label="Номер телефона" type='string' name='name' vaiant="outlined" />
                </Box>
                <Box sx={{mb:'108px'}}>
                    <Password fullWidth/>
                </Box>

                <CustomButton>Войти</CustomButton>

            </form>
        </Box>
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
