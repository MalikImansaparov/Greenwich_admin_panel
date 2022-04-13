import logo from '../../../assets/img/Greenwich.svg'
import main from '../../../assets/img/Group 15.svg'
import Typography from "@mui/material/Typography";
import {CustomButton} from "../../customButton";
import React from "react";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/system";
import viewStatistic from "../../../assets/img/Frame 1515.png";
import inspectOrders from "../../../assets/img/Frame 1514.svg";
import addEmployers from "../../../assets/img/Frame 1517.svg";
import addProducts from "../../../assets/img/Frame 1518.svg";

const CartImg = styled('img')`
 height: 400px;
 width: 600px;
 border-radius: 20px;
`

export const Main = () => {
    const navigate = useNavigate()
    return(
        <>
        <Grid container sx={{display: 'flex',mx:'100px', mt:'50px'}}>
            <Grid item xl={6} sx={{mt:{lg:'200px', md:'150px', sm: '70px'}}}>
                <Typography>
                    Административная панель</Typography>
                <Box component='img' src={logo} alt='logo'
                sx={{width: {lg:'400px', md:'280px', sm:'265px'}}}/>
                <Typography>
                    Решение, которое помогает автоматизировать <br/> работу магазина с комнатными растениями.
                </Typography>
                <CustomButton onClick={() => navigate('/orders')} sx={{width:{md:'275px'}}}>Перейти в панель</CustomButton>
            </Grid>
            <Grid item xl={6} ml={{lg: '80px', md: '100px'}}>
                <Box component='img'
                     src={main}
                     alt='main'
                    />
            </Grid>
        </Grid>
           <Grid container spacing={2}>
               <Grid item lg={6}>
                   <CartImg component='img' src={inspectOrders} alt='info'>
               </Grid>
               <Grid item lg={6}>
                   <CartImg component='img' src={viewStatistic} alt='info'/>
               </Grid>
               <Grid item lg={6}>
                   <CartImg component='img' src={addProducts} alt='info'/>
               </Grid>
               <Grid item lg={6}>
                   <CartImg component='img' src={addEmployers} alt='info'/>
               </Grid>
           </Grid>
        </>
    )
}
