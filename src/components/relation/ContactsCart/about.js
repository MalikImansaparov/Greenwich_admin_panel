import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate} from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncAllAbout} from "../../../store/asyncAction/asyncContacts";
import {styled} from "@mui/material";
import {Item} from "../../../style";

const CartItem = styled(Item)`
  height: 266px;
  width: 987px;
  border-radius: 20px;
  margin-left: 40px;
  cursor: pointer;
  padding-top: 0;
  &: hover {
    transform: scale(1.1);
    transition: transform 0.9s;
    border: 1px solid #487349;
  }
`;

export const AboutUs = () => {
    const navigate = useNavigate();
      const dispatch = useDispatch();
      const about = useSelector((state) => state.contacts.about || []);

      useEffect(() => {
        dispatch(AsyncAllAbout());
      }, []);

    return (
      <>
        <Box>
          <Typography
            sx={{
              color: 'black',
              fontSize: '30px',
              fontWeight: 600,
              ml: '30px',
              my: '50px',
            }}
          >
            О нас
          </Typography>
        </Box>
          <>
              {about.map((value) => {
                  return (
        <CartItem onClick={() => navigate(`edit/${value.id}`)} key={value.id}>
                    <Box sx={{ display: 'flex' }} >
                <Box>
                    <Box component="img" src={value.picture} alt="about" sx={{width: '379px', height: '240px'}}/>
                </Box>
                <Box sx={{ width: '376px', mx: '100px', my: '40px' }}>
                    <Typography sx={{ fontWeight: 'bold', mb: '27px' }}>
                        {value.name}
                    </Typography>
                    <Typography
                        sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '16px' }}
                    >
                        {value.description}
                    </Typography>
                </Box>
                 </Box>
        </CartItem>
                  )}
              )}
              </>
      </>
    );
};
