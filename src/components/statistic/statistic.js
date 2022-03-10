import {StatisticTab} from "./statisticTab";
import StatisticCourier from "./view/statisticCourier/statisticCourier";
import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import * as React from "react";
import {Header} from "../header/header";
import StatisticFlorist from "./view/statisticFlorist/statisticFlorist";


export const Statistic = () => {
    return (
       <Box>
           <Header/>
           <StatisticTab/>
           <StatisticCourier/>
           <StatisticFlorist/>
           <Divider sx={{width:'1080px', my:'30px'}}/>
       </Box>
    )
}
