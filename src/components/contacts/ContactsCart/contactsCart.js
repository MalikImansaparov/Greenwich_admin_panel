import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ContactsCartLeft} from "./ContactCartLeft";
import {ContactsCartRight} from "./ContactCartRigth";
import {useNavigate, useParams} from "react-router";
import {Item} from "../../../style";
import {styled} from "@mui/material";

const CartItem = styled(Item)`
      height: 458px;
      width: 445px;
      border-radius: 20px;
      margin: 38px;
      cursor: pointer;
      &: hover {
      transform: scale(1.1);
      transition: transform .2s   
      }         
`

export const ContactsCarts = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    return (
        <Box>
            <Box sx={{mb: '24px'}}>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: '30px',
                        fontWeight: 600,
                        ml: '30px'
                    }}
                >
                    Контакты
                </Typography>
            </Box>
        <Grid container spacing={3}>
            <Grid item xl={6}>
                <CartItem onClick={() => {navigate('/contacts/edit')}}>
                <ContactsCartLeft/>
                </CartItem>
            </Grid>
            <Grid item xl={6}>
                <CartItem >
                    <ContactsCartRight onClick={() => {navigate('/contacts/edit')}}/>
                </CartItem>
            </Grid>
        </Grid>
        </Box>
    )
}
