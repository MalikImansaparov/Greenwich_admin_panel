import Box from "@mui/material/Box";
import {OrderTab} from "../../components/orders/containers/OrderTab";
import {Header} from "../../components/header/header";


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

