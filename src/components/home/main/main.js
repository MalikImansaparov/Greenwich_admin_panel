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
                <Typography sx={{
                    fontSize: {lg:'30px', md:'24px', sm:'22px'},
                    fontWeight: '700',
                    mb: {lg: '15px',md: '10px', sm: '10px'}
                }}>
                    Административная панель</Typography>
                <Box component='img' src={logo} alt='logo'
                sx={{width: {lg:'400px', md:'280px', sm:'265px'}}}/>
                <Typography sx={{
                    fontSize: {lg:'24px', md:'18px'},
                    fontWeight: '600',
                   width: {lg:'600px', md:'450px'},
                    mt: {lg: '30px',md: '20px',sm: '15px'},
                    mb: {lg:'140px',md:'100px', sm: '40px'}
                }}>
                    Решение, которое помогает автоматизировать <br/> работу магазина с комнатными растениями.
                </Typography>
                <CustomButton onClick={() => navigate('/orders')} sx={{width:{md:'275px'}}}>Перейти в панель</CustomButton>
            </Grid>
            <Grid item xl={6} ml={{lg: '80px', md: '100px'}}>
                <Box component='img'
                     src={main}
                     alt='main'
                     sx={{
                         display:{md: 'block', lg: 'block', sm: 'none'},
                         height: {md:'560px', lg:'650px',},
                         width: {md:'350px',lg: '525px',}
                     }}/>
            </Grid>
        </Grid>
           <Grid container spacing={2} sx={{ mx:'20px' , mt:{lg:'100px',md:'20px'}, mb:'20px', justifyContent: 'center'}}>
               <Grid item lg={6}>
                   <CartImg component='img' src={inspectOrders} alt='info'
                            sx={{width: {md:'430px', lg:'600px'},
                                height: {md:'300px', lg: '400px'}}}/>
               </Grid>
               <Grid item lg={6}>
                   <CartImg component='img' src={viewStatistic} alt='info'
                            sx={{width: {md:'430px', lg:'600px'},
                                height: {md:'300px', lg: '400px'}}}/>
               </Grid>
               <Grid item lg={6}>
                   <CartImg component='img' src={addProducts} alt='info'
                            sx={{width: {md:'430px', lg:'600px'},
                                height: {md:'300px', lg: '400px'}}}/>
               </Grid>
               <Grid item lg={6}>
                   <CartImg component='img' src={addEmployers} alt='info'
                            sx={{width: {md:'430px', lg:'600px'},
                                height: {md:'300px', lg: '400px'}}}/>
               </Grid>
           </Grid>
        </>
    )
}
