import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from "react";

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
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (

      <Box sx={{ width: '625px', textAlign: 'center', mb: '72px' }}>
          <Typography
              sx={{
                  color: 'black',
                  fontSize: 32,
                  fontWeight: 600,
                  mb: '75px'
              }}
          >
              Приветствуем, Администратор
          </Typography>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Сегодня" />
          <Tab label="Последние 3 месяца" />
          <Tab label="Последние 6 месяца" />
        </Tabs>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}>

        </TabPanel>
          <TabPanel value={value} index={2}>

          </TabPanel>
      </Box>
  );
};

