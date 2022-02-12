import Box from "@mui/material/Box";
import {SignInLogo} from "./view/signInLogo";
import  {SignInTab} from "../../containers/signInTab";
import Container from "@mui/material/Container";

export const SignInPage = () => {
    return (
      <Box maxWidth="xl">
        <Container sx={{ display: 'flex', mt: '40px' }} maxWidth="lg">
          <SignInLogo />
          <SignInTab />
        </Container>
      </Box>
    );
}
