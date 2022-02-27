import {Outlet} from "react-router";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../sidebar/drawer";

export const Home = () => {
  return (
          <Box display="flex">
            <ResponsiveDrawer/>
            <Outlet />
          </Box>
      )
};