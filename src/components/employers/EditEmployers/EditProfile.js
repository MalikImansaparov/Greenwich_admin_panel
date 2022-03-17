import React, {useEffect} from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {InputWrapper, SelectWrapper, LabelWrapper,} from "../InputWrapper";
import {Item} from "../../../style";
import {validationSchema} from "../../signinAuth/validateForm";
import {GoBack} from "../../goBack";
import {useDispatch, useSelector} from "react-redux";
import {AsyncEditEmployers, AsyncGetEmployers, AsyncGetProfile} from "../../../store/asyncAction/asyncEmployers";

const CustomButton = styled(Button)`
  height: 52px;
  width: 200px;
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

export const EditEmployers = (id) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.employers.profile);

    // useEffect(() => {
    //   dispatch(AsyncGetProfile(id));

    // }, []);

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
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone_number: profile.phone_number,
        role: profile.role,
        salary: '',
      },
      onSubmit: (values, { setSubmitting }) => {
        dispatch(AsyncEditEmployers(values, id));
        setSubmitting(false);
        navigate(-1);
      },
      validationSchema: validationSchema,
    });
    return (
        <Item sx={{width: '1060px'}}>
            <FormControl>
                <form onSubmit={handleSubmit}>
                    <Typography sx={{
                        fontSize: '28px',
                        fontWeight: 500,
                        textAlign: 'left',
                        my: '30px'
                    }}>
                        Изменение профиля
                    </Typography>
                    <Box sx={{ mb: '30px' }}>
                        <LabelWrapper>Имя</LabelWrapper>
                        <InputWrapper
                            name="name"
                            onChange={handleChange}
                            type="string"
                            value={values.first_name}
                            onBlur={handleBlur}
                            placeholder={profile.first_name}
                        />
                        {errors.name && touched.name && (
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.name}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ mb: '30px' }}>
                        <LabelWrapper>Фамилия</LabelWrapper>
                        <InputWrapper
                            name="surname"
                            onChange={handleChange}
                            type="string"
                            value={values.last_name}
                            onBlur={handleBlur}

                        />
                        {errors.surname && touched.surname && (
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.surname}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ mb: '30px' }}>
                        <LabelWrapper>Номер телефона</LabelWrapper>
                        <InputWrapper
                            name="number"
                            onChange={handleChange}
                            type="text"
                            value={values.phone_number}
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
                        <LabelWrapper>Электронная почта</LabelWrapper>
                        <InputWrapper
                            name="email"
                            onChange={handleChange}
                            type="email"
                            value={values.email}
                            onBlur={handleBlur}

                        />
                        {errors.email && touched.email && (
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.email}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ mb: '30px' }}>
                        <LabelWrapper>Роль</LabelWrapper>
                        <SelectWrapper
                            name="role"
                            type='string'
                            value={values.role}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{ display: 'block'}}
                        >
                            <option value="florist" label="Флорист" />
                            <option value="courier" label="Курьер" />
                            <option value="admin" label="Админ" />
                        </SelectWrapper>
                        {errors.role && touched.role && (
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.role}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ mb: '30px' }}>
                        <LabelWrapper>Зарплата</LabelWrapper>
                        <InputWrapper
                            name="salary"
                            onChange={handleChange}
                            type="number"
                            value={values.salary}
                            onBlur={handleBlur}

                        />
                        {errors.salary && touched.salary && (
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: 'error.main',
                                    mt: '12px',
                                    ml: '14px',
                                }}
                            >
                                {errors.salary}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                        <GoBack/>
                        <CustomButton type="submit" disabled={isSubmitting}>
                            Сохранить
                        </CustomButton>
                    </Box>

                </form>
            </FormControl>
        </Item>

    );
};
