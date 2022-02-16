import React from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {InputWrapper, SelectWrapper, LabelWrapper,} from "../InputWrapper";
import {Item} from "../../../style";
import {validationSchema} from "../../authentication/validateForm";
import {GoBack} from "../../goBack";

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
    background-color: #9C9C9C;
  }
`;

export const EditPassword = () => {

    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, errors,touched, isSubmitting } = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        onSubmit: () => {
            navigate()
        },
        validationSchema: validationSchema
    });
    return (
        <Item sx={{width: '1000px',  borderRadius:'20px'}}>
            <FormControl>
                <form onSubmit={handleSubmit}>
                    <Typography sx={{
                        fontSize: '28px',
                        fontWeight: 500,
                        textAlign: 'left',
                        my: '30px'
                    }}>
                        Изменение пароля
                    </Typography>
                    <Box sx={{ mb: '30px' }}>
                        <LabelWrapper>Новый пароль</LabelWrapper>
                        <InputWrapper
                            name="password"
                            onChange={handleChange}
                            type="password"
                            value={values.password}
                            onBlur={handleBlur}
                            placeholder="*******"
                        />
                        {errors.password && touched.password && (
                            <LabelWrapper
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.password}
                            </LabelWrapper>
                        )}
                    </Box>
                    <Box sx={{ mb: '30px' }}>
                        <LabelWrapper>Потверждение пароля</LabelWrapper>
                        <InputWrapper
                            name="confirmPassword"
                            onChange={handleChange}
                            type="password"
                            value={values.confirm}
                            onBlur={handleBlur}
                            placeholder="*******"
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.confirmPassword}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                        <GoBack/>
                        <CustomButton type="submit" disabled={isSubmitting}>
                            Создать
                        </CustomButton>
                    </Box>
                </form>
            </FormControl>
        </Item>

    );
};
