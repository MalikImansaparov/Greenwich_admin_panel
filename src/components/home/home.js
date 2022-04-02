import {Navigate, Outlet} from "react-router";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../sidebar/drawer";
import * as React from "react";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const Home = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if(!isAuthenticated) {
            return <Navigate to="/auth" />
        }
    },[])

  return (
          <Box display="flex" mx={4}>
            <ResponsiveDrawer/>
            <Outlet />
          </Box>
      )
};
