import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from "react";
import StatisticWeek from "./statisticWeek";
import Statistic3month from "./statistic3month";
import Statistic6month from "./statistic6month";
import avatar from "../assets/img/avater.svg"

export const HomeTab = () => {
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
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Typography
                  sx={{
                      color: 'black',
                      fontSize: 32,
                      fontWeight: 600,

                  }}
              >
                  Приветствуем, Администратор
              </Typography>
              <Box sx={{display: 'flex', mt:'10px', '&:hover': {
                      color: '#487349',
                      cursor:'pointer',

                  },}}>
                  <Typography sx={{
                      width: '250px',
                      textAlign: 'center',
                      fontSize: 22,
                      fontWeight: 600,
                      mt: '10px'
                      }}>
                      Малик Имансапаров
                  </Typography>
                  <img src={avatar} alt='avatar' sx={{mt:'20px'}}/>
              </Box>
          </Box>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          sx={{ mb: '42px', fontSize: '20px' }}
        >
          <Tab label="Неделя" sx={{mr: '30px', ml: '15px'}}/>
          <Tab label="Последние 3 месяца" sx={{mr: '30px'}}/>
          <Tab label="Последние 6 месяца" />
        </Tabs>
        <TabPanel value={value} index={0}>
         <StatisticWeek/>
        </TabPanel>
        <TabPanel value={value} index={1}>
         <Statistic3month/>
        </TabPanel>
          <TabPanel value={value} index={2}>
          <Statistic6month/>
          </TabPanel>
      </Box>
  );
};

