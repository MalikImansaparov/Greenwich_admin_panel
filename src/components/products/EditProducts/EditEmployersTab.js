import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import {useState} from "react";
import {EditEmployers} from "./EditProfile";

export const EditEmployersTab = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = { width: 985, height: 200};

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
                        <Typography component={'span'}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (

            <Box sx={{ width: '525px', textAlign: 'center' }}>
                <Paper
                    elevation={3}
                    style={paperStyle}
                    sx={{
                        ml: '100px',
                        borderRadius: '20px',
                    }}
                >
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: '48px',
                        fontWeight: 700,
                        my: '26px',
                    }}
                >
                    Вход
                </Typography>
                <Divider
                    sx={{
                        mb: '50px',
                    }}
                />
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{ mb: '95px', ml: '80px' }}
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Изменение профиля" />
                    <Tab label="Изменение пароля" />
                </Tabs>
              </Paper>
                <Paper>
                    <TabPanel value={value} index={0}>
                        <EditEmployers/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>

                    </TabPanel>
                </Paper>

            </Box>

    );
};