import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Order3Month} from "../view/statistic3month/order3Month";
import {Item} from "../../../style";
import {Income3Month} from "../view/statistic3month/income3Month";

export default function Statistic3month() {
    return (
        <Grid container >
            <Grid item xl={12}>
                <Item sx={{
                    height: '458px',
                    width: '1070px',
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
            <Grid item xl={12}>
                <Item sx={{
                    height: '458px',
                    width: '1070px',
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
                    <Income3Month/>
                </Item>
            </Grid>
        </Grid>
    );
}
