import Box from "@mui/material/Box";
import {OrderTab} from "./containers/OrderTab";
import {Header} from "../header/header";
import React from "react";
import BreadCrumb from "../breadCrumbs";
import {Search} from "../search";
import Container from "@mui/material/Container";

export const Orders = () => {
    return (
            <Container fixed>
                <Header/>
                <Box sx={{display: 'flex', }}>
                    <BreadCrumb/>
                    <Search/>
                </Box>
                <OrderTab/>
            </Container>
    );
};

