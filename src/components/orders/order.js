import Box from "@mui/material/Box";
import {OrderTab} from "./containers/OrderTab";
import {Header} from "../header/header";


export const Orders = () => {
    return (
        <Box>
            <Box sx={{my:'38px' , mx: '32px'}}>
                <Header/>
                <OrderTab/>
            </Box>

        </Box>
    );
};

