import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {IncomeWeek} from "../views/statisticWeek/incomeWeek";
import {UsersWeek} from "../views/statisticWeek/usersWeek";
import {OrderWeek} from "../views/statisticWeek/orderWeek";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function StatisticWeek() {
    return (
        <Grid container>
                    <Grid item xl={7}>
                        <Item sx={{
                            height: '472px',
                            width: '574px',
                            borderRadius: '20px',
                            mr: '15px'
                        }}>

                            <IncomeWeek/>
                        </Item>
                    </Grid>
                    <Grid item xl={5}>
                        <Item sx={{
                            height: '472px',
                            width: '467px',
                            borderRadius: '20px',
                            ml: '15px'
                        }}>

                            <UsersWeek/>
                        </Item>
                    </Grid>
                    <Grid item xl={12}>
                        <Item sx={{
                            height: '458px',
                            width: '1171px',
                            borderRadius: '20px',
                            mt: '48px'
                        }}>
                            <OrderWeek/>
                        </Item>
                    </Grid>
        </Grid>
    );
}
