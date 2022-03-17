import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ContactsCartLeft} from "./ContactCartLeft";
import {ContactsCartRight} from "./ContactCartRigth";
import {useNavigate, useParams} from "react-router";
import {Item} from "../../../style";
import {styled} from "@mui/material";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AsyncAllContacts} from "../../../store/asyncAction/asyncContacts";

const CartItem = styled(Item)`
      height: 458px;
      width: 445px;
      border-radius: 20px;
      margin-left: 40px;
      cursor: pointer;
      &: hover {
      transform: scale(1.1);
      transition: transform .9s; 
      border: 1px solid #487349 
      }         
`

export const ContactsCarts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
        dispatch(AsyncAllContacts(id))
    },[])

    return (
        <Box>
            <Box sx={{mb: '24px'}}>
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
            <Grid item xl={6}>
                <CartItem onClick={() => {navigate(`/contacts/edit/${id}`)}}>
                <ContactsCartLeft/>
                </CartItem>
            </Grid>
            <Grid item xl={6}>
                <CartItem>
                    <ContactsCartRight onClick={() => {navigate(`/contacts/edit/${id}`)}}/>
                </CartItem>
            </Grid>
        </Grid>
        </Box>
    )
}
