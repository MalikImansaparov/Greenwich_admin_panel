import {StatisticTab} from "./statisticTab";
import StatisticCourier from "./view/statisticCourier";
import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import * as React from "react";


export const Statistic = () => {
    return (
       <Box>
           <StatisticTab/>
           <StatisticCourier/>
           <Divider sx={{width:'1080px', my:'30px'}}/>
       </Box>
    )
}
