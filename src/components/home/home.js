import React,{useEffect} from "react";
import {Outlet, useNavigate} from "react-router";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../sidebar/drawer";
import {useSelector} from "react-redux";

export const Home = () => {
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if(!isAuthenticated) {
            return navigate('/auth')
        }
    },[])

  return (
          <Box display="flex" mx={4}>
            <ResponsiveDrawer/>
            <Outlet />
          </Box>
      )
};
