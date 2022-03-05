import address2 from '../../../assets/img/address2.png'
import Box from "@mui/material/Box";
import React from "react";
import {styled} from "@mui/system";

export const CartList = styled(Box)`
display: flex;
justify-content: space-between;
margin: 20px;
font-size: 16px;
`
export const CartText = styled('span')`
color: #487349;
`

export const ContactsCartRight = () => {
    return(
        <Box >
            <Box component="img" src={address2} alt="address"
                 sx={{width: '445px', height: '270px',}}/>
            <CartList>
                <CartText>Адрес:</CartText>
                <span>ул. Максима Горького 123</span>
            </CartList>
            <CartList>
                <CartText>Номер работы:</CartText>
                <span>0555 55-66-77</span>
            </CartList>
            <CartList>
                <CartText>Время работы</CartText>
                <span>9:00 - 21:00</span>
            </CartList>
        </Box>
    )
}
