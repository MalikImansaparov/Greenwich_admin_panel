import Box from "@mui/material/Box";
import {HomeTab} from "../../containers/homeTab";
import StatisticToday from "../../containers/statisticToday";


export const Main = () => {
  return (
    <Box>
        <Box sx={{my:'68px' , mx: '32px'}}>
            <HomeTab/>
            <StatisticToday/>
        </Box>

    </Box>
  );
};
