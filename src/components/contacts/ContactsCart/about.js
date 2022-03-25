import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Item } from '../../../style';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import about from '../../../assets/img/about.svg';

const CartItem = styled(Item)`
  height: 266px;
  width: 987px;
  border-radius: 20px;
  margin-left: 40px;
  cursor: pointer;
  &: hover {
    transform: scale(1.1);
    transition: transform 0.9s;
    border: 1px solid #487349;
  }
`;

export const AboutUs = () => {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const contacts = useSelector((state) => state.contacts.contacts || []);

  //   useEffect(() => {
  //     dispatch();
  //   }, []);

  return (
    <>
      <Box>
        <Typography
          sx={{
            color: 'black',
            fontSize: '30px',
            fontWeight: 600,
            ml: '30px',
            mb: '50px',
          }}
        >
          О нас
        </Typography>
      </Box>
      <CartItem sx={{ display: 'flex' }}>
        <Box>
          <Box component="img" src={about} alt="about" />
        </Box>
        <Box sx={{ width: '376px', mx: '100px', my: '40px' }}>
          <Typography sx={{ fontWeight: 'bold', mb: '27px' }}>
            Магазин комнатных растений “Greenwich”
          </Typography>
          <Typography
            sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '16px' }}
          >
            Наш магазин предоставляет всегда свежие комнатные растения и цветы
            из лучших питомников. Строгий отбор растений и доставка до двери в
            любую погоду. Самый большой выбор комнатных растений и цветов -
            более 5000 наименований! Постоянный товарный запас на складе в
            Бишкеке, а также растения выращенные нашими флористами
            собственноручно.{' '}
          </Typography>
        </Box>
      </CartItem>
    </>
  );
};
