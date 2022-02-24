import {StatisticTab} from "./statisticTab";
import StatisticCourier from "./view/statisticCourier";
import Box from "@mui/material/Box";
import {OnlyBreadCrumbs} from "../onlyBreadCrumbs";


export const Statistic = () => {
    return (
       <Box sx={{mx:2}}>
           <OnlyBreadCrumbs/>
           <StatisticTab/>
           <StatisticCourier/>
       </Box>
    )
}
