import { Header } from "../header/header";
import {ProductsTable} from "./ProductsTable/ProductsTable";
import {styled} from "@mui/system";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useNavigate, Outlet} from "react-router";
import BreadCrumb from "../breadCrumbs";
import {Search} from "../search";

export const Products = () => {

return (
    <Box>
        <Box sx={{mx: 3}}>
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
