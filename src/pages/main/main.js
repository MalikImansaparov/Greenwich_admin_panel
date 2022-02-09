import Box from "@mui/material/Box";
import {HomeTab} from "../../containers/homeTab";
import StatisticToday from "../../containers/statisticToday";
import StatisticWeek from "../../containers/statisticWeek";


export const Main = () => {
  return (
    <Box>
        <Box sx={{my:'38px' , mx: '32px'}}>
            <HomeTab/>
            <StatisticWeek/>
        </Box>

    </Box>
  );
};
