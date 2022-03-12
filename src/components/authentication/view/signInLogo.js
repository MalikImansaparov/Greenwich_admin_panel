import logo from "../../../assets/img/Greenwich.svg"
import flowers from "../../../assets/img/Flowers.svg"
import Box from "@mui/material/Box";
import React from "react";

export const SignInLogo = () => {
    return (
        <Box>
            <Box component="img"
    src={logo} alt="logo"
    sx={{
        height: '108px',
        width: '525px',
        marginRight: '50px',
        alignSelf: 'center',
        marginBottom: '20px',
        marginTop: '103px',
        paddingLeft: '25px'
    }}
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
