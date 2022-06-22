import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { useNavigate} from 'react-router';;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AsyncAllContacts,
} from '../../../store/asyncAction/asyncContacts';
import { AboutUs } from './about';
import CircularPreloader from "../../preloader";
import {CustomButton} from "../../customButton";
import {CartItem, CartList, CartText} from "./style";

export const ContactsCarts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const isFetching = useSelector((state) => state.contacts.loading);
  const data = Array.from(contacts)
  useEffect(() => {
    dispatch(AsyncAllContacts());
  }, []);

  return (
    <>
      <Box
        sx={{
          mb: '24px',
          mr: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            color: 'black',
            fontSize: '30px',
            fontWeight: 600,
          }}
        >
          Контакты
        </Typography>
        <CustomButton to="add" sx={{ textDecoration: 'none' }}>
          Добавить филиалы
        </CustomButton>
      </Box>
      <>
          {isFetching ? (
              <Box sx={{height: '300px', justifyContent: 'center', alignItems: 'center'}}>
                  <CircularPreloader />
              </Box>
          ) : (
      <Box sx={{ display: 'flex', mt: '70px' }}>
        {data?.map((contact) => {
          return (
            <Grid container spacing={2} key={contact.id}>
              <Grid item lg={6} >
                <CartItem onClick={() => navigate(`${contact.id}`)}>
                  <Box
                    component="img"
                    src={contact.picture}
                    alt="address"
                    sx={{ width: '445px', height: '270px' }}
                  />
                  <CartList>
                    <CartText>Адрес:</CartText>
                    <span>{contact.address}</span>
                  </CartList>
                  <CartList>
                    <CartText>Номер работы:</CartText>
                    <span>{contact.phone}</span>
                  </CartList>
                  <CartList>
                    <CartText>Время работы</CartText>
                    <span>
                      {contact.open_from.split(':').slice(0,2).join(':')}-{contact.closed_from.split(':').slice(0,2).join(':')}
                    </span>
                  </CartList>
                </CartItem>
              </Grid>
            </Grid>
          );
        })}
      </Box>
          )}
      </>
      <AboutUs />
    </>
  );
};
