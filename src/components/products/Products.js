import { Header } from "../header/header";
import Box from "@mui/material/Box";
import * as React from "react";
import {Outlet} from "react-router";
import {Divider} from "@mui/material";

export const Products = () => {

return (
  <Box>
    <Box>
      <Outlet />
      <Divider sx={{ width: '1080px', my: '30px' }} />
    </Box>
  </Box>
);
}
