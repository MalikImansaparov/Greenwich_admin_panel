import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {IncomeToday} from "../views/statisticToday/incomeToday";
import {UsersToday} from "../views/statisticToday/usersToday";
import {OrderToday} from "../views/statisticToday/orderToday";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Statistic6month() {
    return (
        <Grid container>
                    <Grid item xl={7}>
                        <Item sx={{
                            height: '472px',
                            width: '674px',
                            borderRadius: '20px',
                            mr: '15px'
                        }}>
                            <Box sx={{display: 'flex', justifyContent: 'space-around', py:'22px'}}>
                                <Typography variant={'h5'} mt={'8px'}>
                                    Общее количество заказов
                                </Typography>
                                <Typography variant={'h6'} >
                                    7668
                                    <Typography color='green' >
                                        ↑ 7,00%
                                    </Typography>
                                </Typography>
                            </Box>
                            <IncomeToday/></Item>
                    </Grid>
                    <Grid item xl={5}>
                        <Item sx={{
                            height: '472px',
                            width: '467px',
                            borderRadius: '20px',
                            ml: '15px'
                        }}><UsersToday/></Item>
                    </Grid>
                    <Grid item xl={12}>
                        <Item sx={{
                            height: '458px',
                            width: '1171px',
                            borderRadius: '20px',
                            mt: '48px'
                        }}><OrderToday/></Item>
                    </Grid>
        </Grid>
    );
}
