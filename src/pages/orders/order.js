import React from "react";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,

}));

export const Orders = () => {
    return (
        <Grid container >
            <Grid item xs={12}>
                <Item sx={{
                    height: '458px',
                    width: '1171px',
                    borderRadius: '20px',
                    mt: '48px'
                }}></Item>
            </Grid>

        </Grid>
    )
}
