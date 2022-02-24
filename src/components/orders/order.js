import Box from "@mui/material/Box";
import {OrderTab} from "./containers/OrderTab";
import {Header} from "../header/header";
import React from "react";
import BreadCrumb from "../breadCrumbs";
import {Search} from "../search";

export const Orders = () => {
    return (
            <Box>
                <Box sx={{mx: 3}}>
                    <Header/>
                    <Box sx={{display: 'flex',}}>
                        <BreadCrumb/>
                        <Search/>
                    </Box>
                    <OrderTab/>
                </Box>
            </Box>
    );
};

