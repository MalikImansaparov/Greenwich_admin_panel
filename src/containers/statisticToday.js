import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function StatisticToday() {
    return (
        <Grid container>
                    <Grid item lg={6}>
                        <Item sx={{
                            height: '472px',
                            width: '674px',
                            borderRadius: '20px',
                            mr: '17px'
                        }}>xs=8</Item>
                    </Grid>
                    <Grid item lg={4}>
                        <Item sx={{
                            height: '472px',
                            width: '467px',
                            borderRadius: '20px'
                        }}>xs=4</Item>
                    </Grid>
                    <Grid item lg={12}>
                        <Item sx={{
                            height: '458px',
                            width: '1171px',
                            borderRadius: '20px',
                            mt: '48px'
                        }}>xs=4</Item>
                    </Grid>
        </Grid>
    );
}
