import {Outlet} from "react-router";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../sidebar/drawer";
import * as React from "react";

export const Home = () => {
  return (
          <Box display="flex" mx={4}>
            <ResponsiveDrawer/>
            <Outlet />
          </Box>
      )
};
