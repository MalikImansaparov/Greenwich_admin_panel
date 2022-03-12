import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from "react";
import StatisticCourier from "../view/statisticCourier/statisticCourier";
import StatisticFlorist from "../view/statisticFlorist/statisticFlorist";

export const EmployersStatisticTab = () => {
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
          <Typography
              sx={{
                  color: 'black',
                  fontSize: 30,
                  fontWeight: 600,
                  my: '30px'
              }}
          >
              Статистика по сотрудникам
          </Typography>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          sx={{ mb: '15px', fontSize: '20px' }}
        >
          <Tab label="Список курьеров" sx={{mr: '30px', ml: '15px'}}/>
          <Tab label="Список флористов" sx={{mr: '30px'}}/>
        </Tabs>
        <TabPanel value={value} index={0} width={100}>
         <StatisticCourier/>
        </TabPanel>
          <TabPanel value={value} index={1} width={100}>
          <StatisticFlorist/>
          </TabPanel>
      </Box>
  );
};

