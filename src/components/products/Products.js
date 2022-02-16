import { Header } from "../header/header";
import {ProductsTable} from "./ProductsTable/ProductsTable";
import {styled} from "@mui/system";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useNavigate, Outlet} from "react-router";

export const Products = () => {

return (
  <div sx={{ ml: '10px' }}>
     <Header/>
    <Outlet/>
  </div>
);
}
