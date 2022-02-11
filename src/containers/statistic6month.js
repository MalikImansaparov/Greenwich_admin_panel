import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Income6Month} from "../views/statistic6month/income6month";
import {Users6Month} from "../views/statistic6month/users6month";
import {Order6Month} from "../views/statistic6month/order6month";
import {Item} from "../style";

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
                                        ↑7,00%
                                    </Typography>
                                </Typography>
                            </Box>
                            <Income6Month/></Item>
                    </Grid>
                    <Grid item xl={5}>
                        <Item sx={{
                            height: '472px',
                            width: '467px',
                            borderRadius: '20px',
                            ml: '15px'
                        }}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', py:'22px', mx: '22px'}}>
                                <Typography variant={'h6'}>
                                    Общее количество <br/> пользователей
                                </Typography>
                                <Typography variant={'h6'} >
                                    3680
                                    <Typography color='green' >
                                        ↑8,00%
                                    </Typography>
                                </Typography>
                            </Box>
                            <Users6Month/></Item>
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
                                    $76685.41
                                    <Typography color='green' >
                                        ↑7,00%
                                    </Typography>
                                </Typography>
                            </Box>
                            <Order6Month/></Item>
                    </Grid>
        </Grid>
    );
}
