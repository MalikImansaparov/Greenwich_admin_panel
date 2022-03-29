import Box from "@mui/material/Box";
import {OrderTab} from "./containers/OrderTab";
import React from "react";
import {Divider} from "@mui/material";

export const Orders = () => {
    return (
      <Box>
        <Box>
          <OrderTab />
          <Divider sx={{ width: '1080px', my: '30px' }} />
        </Box>
      </Box>
    );
};

