import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Order6Month} from "../view/statistic6month/order6month";
import {Item} from "../../../style";

export default function Statistic6month() {
    return (
        <Grid container>
                    <Grid item xl={12}>
                        <Item sx={{
                            height: '458px',
                            width: '1050px',
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
