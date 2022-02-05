import Grid from "@mui/material/Grid";
import {Signup} from "./signInSuperAdmin";

export const AuthContainer = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
               <Signup/>
        </Grid>
    )
}
