import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Item } from '../../../style';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncAllContacts } from '../../../store/asyncAction/asyncContacts';
import address from '../../../assets/img/address.png';
import { AboutUs } from './about';

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
// const CartItem = styled(Box)`
//   &::before {
//     content: '';
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 0;
//     box-sizing: border-box;
//     height: 0;
//     border-bottom: 3px solid transparent;
//     border-left: 3px solid transparent;
//     transition: all 0.8s ease;
//   }
//   &::after {
//     content: '';
//     position: absolute;
//     right: 0;
//     top: 0;
//     width: 0;
//     box-sizing: border-box;
//     height: 0;
//     border-top: 3px solid transparent;
//     border-right: 3px solid transparent;
//     transition: all 0.8s ease;
//   }
//   &:hover &::before {
//     border-color: red;
//     width: 100%;
//     height: 100%;
//   }
// `;

export const ContactsCarts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts || []);

  useEffect(() => {
    dispatch(AsyncAllContacts());
  }, []);

  return (
    <Box>
      <Box sx={{ mb: '24px' }}>
        <Typography
          sx={{
            color: 'black',
            fontSize: '30px',
            fontWeight: 600,
            ml: '30px',
            mb: '50px',
          }}
        >
          Контакты
        </Typography>
      </Box>
      <Grid container spacing={7}>
        {contacts?.map((contact) => {
          return (
            <Grid item xl={6} key={contact.id}>
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
                    {contact.open_from.split('T').slice(1, 2).join()}-
                    {contact.closed_from.split('T').slice(1, 2).join()}
                  </span>
                </CartList>
              </CartItem>
            </Grid>
          );
        })}
      </Grid>
      <AboutUs />
    </Box>
  );
};
