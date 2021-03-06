import Box from "@mui/material/Box";
import {SignInLogo} from "./view/signInLogo";
import  {SignInContainer} from "./signInContainer";
import Container from "@mui/material/Container";
import React from "react";

export const SignInPage = () => {
    return (
      <Box maxWidth="xl">
        <Container sx={{ display: 'flex', mt: '90px' }} maxWidth="lg">
          <SignInLogo />
          <SignInContainer />
        </Container>
      </Box>
    );
}
