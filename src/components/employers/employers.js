import { Header } from "../header/header";
import * as React from "react";
import { Outlet} from "react-router";
import BreadCrumb from "../breadCrumbs";
import {Search} from "../search";
import Box from "@mui/material/Box";

export const Employers = () => {

return (
    <Box>
        <Box sx={{mx:3}}>
            <Header/>
            <Box sx={{display: 'flex', mb: '40px'}}>
                <BreadCrumb/>
                <Search/>
            </Box>
            <Outlet/>
        </Box>
    </Box>
);
}
