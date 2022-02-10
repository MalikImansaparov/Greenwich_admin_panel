import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Income3Month} from "../views/statistic3month/income3Month";
import {Users3Month} from "../views/statistic3month/users3Month";
import {Order3Month} from "../views/statistic3month/order3Month";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Statistic3month() {
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
                            4668
                            <Typography color='green' >
                                ↑7,00%
                            </Typography>
                        </Typography>
                    </Box>
                    <Income3Month/></Item>
            </Grid>
            <Grid item xl={5}>
                <Item sx={{
                    height: '472px',
                    width: '467px',
                    borderRadius: '20px',
                    ml: '15px'
                }}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', py:'22px', mx: '22px'}}>
                        <Typography variant={'h6'} >
                            Общее количество <br/> пользователей
                        </Typography>
                        <Typography variant={'h6'} >
                            1125
                            <Typography color='green' >
                                ↑8,00%
                            </Typography>
                        </Typography>
                    </Box>
                    <Users3Month/>
                </Item>
            </Grid>
            <Grid item xl={12}>
                <Item sx={{
                    height: '458px',
                    width: '1171px',
                    borderRadius: '20px',
                    mt: '48px'
                }}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', py:'22px', mx:'55px'}}>
                        <Typography variant={'h5'} mt={'8px'}>
                            Общий доход
                        </Typography>
                        <Typography variant={'h6'} >
                            $3668.79
                            <Typography color='green' >
                                ↑7,00%
                            </Typography>
                        </Typography>
                    </Box>
                    <Order3Month/>
                </Item>
            </Grid>
        </Grid>
    );
}
