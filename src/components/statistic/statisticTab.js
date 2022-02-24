import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from "react";
import Statistic3month from "./containers/statistic3month";
import Statistic6month from "./containers/statistic6month";

export const StatisticTab = () => {
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
              {/*<Typography*/}
              {/*    sx={{*/}
              {/*        color: 'black',*/}
              {/*        fontSize: 32,*/}
              {/*        fontWeight: 600,*/}
              {/*        mb: '22px'*/}
              {/*    }}*/}
              {/*>*/}
              {/*    Приветствуем, Администратор*/}
              {/*</Typography>*/}
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          sx={{ mb: '42px', fontSize: '20px' }}
        >
          <Tab label="Последние 3 месяцев" sx={{mr: '30px', ml: '15px'}}/>
          <Tab label="Последние 6 месяцев" sx={{mr: '30px'}}/>
        </Tabs>
        <TabPanel value={value} index={0}>
         <Statistic3month/>
        </TabPanel>
          <TabPanel value={value} index={1}>
          <Statistic6month/>
          </TabPanel>
      </Box>
  );
};

