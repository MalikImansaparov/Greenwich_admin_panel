import Box from "@mui/material/Box";
import {OrderTab} from "./containers/OrderTab";
import {Header} from "../header/header";
import {Search} from "../search";
import Breadcrumbs from "../breadCrumbs";
import React from "react";

export const Orders = () => {
    return (
        <Box>
            <Box sx={{my:'28px' , mx: '5px'}}>
                <Header/>
                <OrderTab/>
            </Box>

        </Box>
    );
};

