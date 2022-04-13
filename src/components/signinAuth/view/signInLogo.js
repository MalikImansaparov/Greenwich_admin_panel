import logo from "../../../assets/img/Greenwich.svg"
import flowers from "../../../assets/img/Flowers.svg"
import Box from "@mui/material/Box";
import React from "react";

export const SignInLogo = () => {
    return (
        <Box>
            <Box component="img"
    src={logo} alt="logo"
    />
            <Box
    component="img"
    src={flowers}
    alt="logo"
    sx={{
        width: '610px',
        alignSelf: 'center',
    }}
    />
        </Box>
    );
}
