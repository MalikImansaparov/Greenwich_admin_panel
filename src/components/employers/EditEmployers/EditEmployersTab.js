import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import {useState} from "react";
import {EditEmployers} from "./EditProfile";
import {EditPassword} from "./EditPassword";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

export const EditEmployersTab = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = {
        width: '1000px',
        marginBottom: '40px',
        height: '90px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent:'center',
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
                    <Box >
                        <Typography component={'span'}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (

            <Box sx={{textAlign: 'center', my: '50px', }}>
                <Paper
                    elevation={3}
                    style={paperStyle}
                >
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{
                        display: 'flex',
                        justifyContent:'center',
                        alignItems: 'center' }}
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab icon={<AccountCircleIcon/>}  label="Изменение профиля" />
                    <Tab icon={<LockIcon/>}  label="Изменение пароля" />
                </Tabs>
              </Paper>
                    <TabPanel value={value} index={0}>
                        <EditEmployers/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <EditPassword/>
                    </TabPanel>

            </Box>

    );
};
