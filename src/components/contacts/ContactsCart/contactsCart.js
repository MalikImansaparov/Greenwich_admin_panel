import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Item } from '../../../style';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AsyncAllContacts,
  AsyncGetAbout,
} from '../../../store/asyncAction/asyncContacts';
import { AboutUs } from './about';
import { Link } from 'react-router-dom';

const CustomButton = styled(Link)`
  height: 52px;
  width: 320px;
  background-color: #487349;
  padding: 14px 30px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  text-decoration: none
  &:hover {
    background-color: #9C9C9C;
  }
`;

const CartItem = styled(Item)`
  height: 458px;
  width: 445px;
  border-radius: 20px;
  margin-left: 40px;
  cursor: pointer;
  &: hover {
    transform: scale(1.1);
    transition: transform 0.9s;
    border: 1px solid #487349;
  }
`;

const CartList = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-size: 16px;
`;
export const CartText = styled('span')`
  color: #487349;
`;

export const ContactsCarts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

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
      <Box sx={{ display: 'flex', mt: '70px' }}>
        {contacts?.map((contact) => {
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
      <AboutUs />
    </>
  );
};
