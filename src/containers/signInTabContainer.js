import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {SignInSuperAdmin} from "../views/authentication/signInSuperAdmin";
import {SignInAdmin} from "../views/authentication/signInAdmin";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import {useState} from "react";

export const SignInOutContainer=()=>{
    const [value,setValue]= useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle={width:585, height: 707}
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
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Paper elevation={3} style={paperStyle}
                           sx={{
                               ml: '120px',
                               height: '707px',
                               width: '585px',
                               borderRadius: '20px',
                    }} >
            <Box sx={{ width: '525px', textAlign: 'center'}}>
                           <Typography
                            sx={{
                                color: 'black',
                                fontSize: 48,
                                fontWeight: 700,
                                my: '27px',
                            }}>
                                Вход</Typography>
                           <Divider sx={{
                               mb: '70px'
                           }}/>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                sx={{mb: '125px', ml: '72px'}}
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                                       <Tab label="Суперадминистратор"/>
                                         <Tab label="Администратор"  />
            </Tabs>
            <TabPanel value={value} index={0}>
                <SignInSuperAdmin handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignInAdmin/>
            </TabPanel>
            </Box>
        </Paper>

    )
}
// export const TabPanel = (props) => {
//     const { children, value, index, ...other } = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
//
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
//
// export default function BasicTabs() {
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     const paperStyle = { padding: 40, height: 707, width: 585, borderRadius: 20, margin:"0 auto" }
//
//     return (
//         <Paper elevation={3} style={paperStyle}
//                sx={{
//                    ml: '120px',
//                    height: '707px',
//                    width: '525px',
//                    borderRadius: '20px',
//         }} >
//         <Box sx={{ width: '525px', textAlign: 'center'}}>
//             <Typography
//             sx={{
//                 color: 'black',
//                 fontSize: 48,
//                 fontWeight: 700,
//                 my: '27px',
//             }}>
//                 Вход</Typography>
//            <Divider sx={{
//                mb: '70px'
//            }}/>
//             <Box sx={{mb: '125px' }}>
//                 <Tabs value={value} onChange={handleChange}>
//                     <Tab label="Суперадминистратор" {...a11yProps(0)} />
//                     <Tab label="Администратор" {...a11yProps(1)} />
//                 </Tabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//                 <SignInSuperAdmin/>
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 <SignInAdmin/>
//             </TabPanel>
//         </Box>
//         </Paper>
//     );
// }
