import address from '../../../assets/img/address.png'
import Box from "@mui/material/Box";
import React from "react";
import {styled} from "@mui/system";
import Grid from "@mui/material/Grid";

export const CartList = styled(Box)`
display: flex;
justify-content: space-between;
margin: 20px;
font-size: 16px;
`
export const CartText = styled('span')`
color: #487349;
`
const CartItem = styled(Box)`
&::before {
content: '';
position: absolute;
left:0;
bottom:0;
width:0;
box-sizing: border-box;
height: 0;
border-bottom:3px solid transparent;
border-left: 3px solid transparent;
transition: all .8s ease;  
}
&::after {
content: '';
position: absolute;
right:0;
top:0;
width:0;
box-sizing: border-box;
height:0;
border-top:3px solid transparent;
border-right: 3px solid transparent;
transition: all .8s ease;
} 
&:hover &::before{
   border-color: red;
   width: 100%;
   height: 100%;
}  
`

export const ContactsCartLeft = () => {
    return(
        <CartItem>
            <Box component="img" src={address} alt="address"
            sx={{width: '445px', height: '270px',}}/>
            <CartList>
                <CartText>Адрес:</CartText>
                <span>ул. Абдрахманова 117</span>
            </CartList>
            <CartList>
                <CartText>Номер работы:</CartText>
                <span>0555 11-22-33</span>
            </CartList>
            <CartList>
                <CartText>Время работы</CartText>
                <span>9:00 - 21:00</span>
            </CartList>
        </CartItem>
    )
}

