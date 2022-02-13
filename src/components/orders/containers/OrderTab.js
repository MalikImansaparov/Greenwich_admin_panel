import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from "react";
import {CurrentOrders} from "../view/CurrentOrders/CurrentOrders";
import {CompletedOrders} from "../view/CompletedOrders/CompletedOrders";
import {CanceledOrders} from "../view/CanceledOrders/CanceledOrders";
import CustomSeparator from "../../breadCrumbs";
import {Search} from "../../search";

export const OrderTab = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography component={'div'}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Box>
            <Box sx={{mb: '24px', ml: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: 24,
                        fontWeight: 600,
                    }}
                >
                   Заказы
                </Typography>
                <Search/>
            </Box>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                sx={{ mb: '24px', fontSize: '20px' }}
            >
                <Tab label="Текущие заказы" sx={{mr: '30px', ml: '15px'}}/>
                <Tab label="Завершеные заказы" sx={{mr: '30px'}}/>
                <Tab label="Отмененные заказы" />
            </Tabs>
            <TabPanel value={value} index={0}>
               <CurrentOrders/>
            </TabPanel>
            <TabPanel value={value} index={1}>
               <CompletedOrders/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CanceledOrders/>
            </TabPanel>
        </Box>
    );
};

