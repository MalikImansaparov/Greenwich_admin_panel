import React from "react";
import Box from "@mui/material/Box";
import {OrderTab} from "./containers/OrderTab";
import {Divider} from "@mui/material";

export const Orders = () => {
    return (
        <Box>
          <OrderTab />
          <Divider sx={{ width: '1080px', my: '30px' }} />
        </Box>
    );
};

