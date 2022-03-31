import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {AsyncEditOrder, AsyncGetOrder} from "../../../../store/asyncAction/asyncOrders";
import {clearOrders} from "../../../../store/actionType/actionTypes";
import {Header} from "../../../header/header";
import BreadCrumb from "../../../breadCrumbs";
import {Item} from "../../../../style";
import CircularPreloader from "../../../preloader";
import {GoBack} from "../../../goBack";
import {InputWrapper} from "../../../products/InputWrapper";
import {LabelWrapper} from "../../../employers/InputWrapper";

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
    background-color: #9c9c9c;
  }
`;

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Имя обязателный'),
  address: Yup.string().required('Укажите адресс'),
  phone_number: Yup.string()
    .required('Номер обязателный')
    .min(9, 'Не правилный номер')
    .max(14, 'Не правилный номер'),
  total_price: Yup.string().required('Укажите цену'),

});

export const EditOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector((state) => state.orders.order);

  useEffect(() => {
    dispatch(AsyncGetOrder(id));
    return () => {
      dispatch(clearOrders());
    };
  }, [dispatch, id]);

  const handleSubmit = (values) => {
    dispatch(AsyncEditOrder({ values, id }));
    // setSubmitting(false);
    // navigate(-1);
  };


  const initialValues = {
      id: order?.id,
      first_name: order?.first_name,
      total_price: order?.total_price,
      phone_number: order?.phone_number,
      address: order?.address,
      price_with_discount: order?.price_with_discount,
  };

  if (!order) {
    return (
      <Box mx={2}>
        <Header />
        <BreadCrumb />
        <Item
          sx={{
            width: '1060px',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPreloader />
        </Item>
      </Box>
    );
  }

  return (
    <Box>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Box sx={{ display: 'flex', mb: '20px' }}>
            <BreadCrumb />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Item
              sx={{
                width: '1060px',
                height: '1000px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FormControl>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                    isSubmitting,
                  }) => (
                    <>
                      <form onSubmit={handleSubmit}>
                        <Typography
                          sx={{
                            fontSize: '28px',
                            fontWeight: 500,
                            textAlign: 'left',
                            my: '30px',
                          }}
                        >
                          Редактирования заказов
                        </Typography>
                        <Box sx={{ mb: '30px' }}>
                          <LabelWrapper>Имя получателя</LabelWrapper>
                          <InputWrapper
                            name="first_name"
                            onChange={handleChange}
                            type="string"
                            value={values.first_name}
                          />
                          {errors.first_name && touched.first_name && (
                            <Typography
                              sx={{
                                textAlign: 'left',
                                fontSize: '13px',
                                color: 'error.main',
                                mt: '12px',
                                ml: '14px',
                              }}
                            >
                              {errors.first_name}
                            </Typography>
                          )}
                        </Box>
                        <Box sx={{ mb: '30px' }}>
                          <LabelWrapper>Номер телефона</LabelWrapper>
                          <InputWrapper
                            name="phone_number"
                            onChange={handleChange}
                            type="text"
                            value={values.phone_number}
                            onBlur={handleBlur}
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

                        <Box sx={{ mb: '30px' }}>
                          <LabelWrapper>Адресс</LabelWrapper>
                          <InputWrapper
                            name="address"
                            onChange={handleChange}
                            type="text"
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
                          <LabelWrapper>Сумма</LabelWrapper>
                          <InputWrapper
                            name="total_price"
                            onChange={handleChange}
                            type="text"
                            value={values.total_price}
                          />
                          {errors.total_price &&
                            touched.total_price && (
                              <Typography
                                sx={{
                                  textAlign: 'left',
                                  fontSize: '13px',
                                  color: 'error.main',
                                  mt: '12px',
                                  ml: '14px',
                                }}
                              >
                                {errors.total_price}
                              </Typography>
                            )}
                        </Box>
                        <Box sx={{ mb: '30px' }}>
                          <LabelWrapper>Скидка</LabelWrapper>
                          <InputWrapper
                            name="price_with_discount"
                            onChange={handleChange}
                            type="string"
                            value={values.price_with_discount}
                            onBlur={handleBlur}
                          />
                          {errors.price_with_discount && touched.price_with_discount&& (
                            <LabelWrapper
                              sx={{
                                textAlign: 'left',
                                fontSize: '13px',
                                color: 'error.main',
                                mt: '12px',
                                ml: '14px',
                              }}
                            >
                              {errors.price_with_discount}
                            </LabelWrapper>
                          )}
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <GoBack />
                          <CustomButton type="submit" disabled={isSubmitting}>
                            Сохранить
                          </CustomButton>
                        </Box>
                      </form>
                    </>
                  )}
                </Formik>
              </FormControl>
            </Item>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
