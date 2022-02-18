import { Header } from "../header/header";
import * as React from "react";
import { Outlet} from "react-router";
import BreadCrumb from "../breadCrumbs";
import {Search} from "../search";
import Box from "@mui/material/Box";

export const Employers = () => {

return (
  <div sx={{ ml: '10px' }}>
     <Header/>
      <Box sx={{display: 'flex', mb: '40px', maxWidth: '800px' }}>
          <BreadCrumb/>
          <Search/>
      </Box>
    <Outlet/>
  </div>
);
}
