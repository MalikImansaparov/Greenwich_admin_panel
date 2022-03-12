import {StatisticTab} from "./statisticTab";
import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import * as React from "react";
import {Header} from "../header/header";
import {EmployersStatisticTab} from "./employersStatisticTab/employersStatisticTab";

export const Statistic = () => {
    return (
       <Box>
           <Header/>
           <StatisticTab/>
           <EmployersStatisticTab/>
           <Divider sx={{width:'1080px', my:'30px'}}/>
       </Box>
    )
}
