import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {IncomeWeek} from "../views/statisticWeek/incomeWeek";
import {OrderWeek} from "../views/statisticWeek/orderWeek";
import {UsersWeek} from "../views/statisticWeek/usersWeek";

export const HomeTab = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><IncomeWeek/></TabPanel>
                <TabPanel value="2"><UsersWeek/></TabPanel>
                <TabPanel value="3"><OrderWeek/></TabPanel>
            </TabContext>
        </Box>
    );
}

// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import {useState} from "react";
// import StatisticWeek from "./statisticWeek";
// import Statistic3month from "./statistic3month";
// import Statistic6month from "./statistic6month";
//
// export const HomeTab = () => {
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//
//
//   function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box>
//             <Typography component={'div'}>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
//
//   return (
//
//       <Box sx={{ width: '625px', mb: '42px' }}>
//           <Typography
//               sx={{
//                   color: 'black',
//                   fontSize: 32,
//                   fontWeight: 600,
//                   mb: '35px'
//               }}
//           >
//               Приветствуем, Администратор
//           </Typography>
//         <Tabs
//           value={value}
//           indicatorColor="primary"
//           textColor="primary"
//           onChange={handleChange}
//           aria-label="disabled tabs example"
//         >
//           <Tab label="Неделя"/>
//           <Tab label="Последние 3 месяца" />
//           <Tab label="Последние 6 месяца" />
//         </Tabs>
//         <TabPanel value={value} index={0}>
//          <StatisticWeek/>
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//          <Statistic3month/>
//         </TabPanel>
//           <TabPanel value={value} index={2}>
//           <Statistic6month/>
//           </TabPanel>
//       </Box>
//   );
// };
//
