import Box from "@mui/material/Box";
import {MainLogo} from "../views/authentication/mainLogo";
import  {SignInOutContainer} from "../containers/signInTabContainer";
import Container from "@mui/material/Container";

export const SignInPage = () => {
    return (
        <Box maxWidth="xl">
            <Container sx={{display: 'flex', m: '150px'}} maxWidth="lg" >
                <MainLogo/>
                <SignInOutContainer/>
            </Container>
        </Box>

    )
}
