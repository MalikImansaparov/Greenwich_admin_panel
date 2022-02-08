import {Outlet} from "react-router";
import ResponsiveDrawer from "../sidebar/drawer";
import Box from "@mui/material/Box";

export const Home = () => {
  return (
          <Box display="flex">
            <ResponsiveDrawer/>
            <Outlet />
          </Box>
      )
};
