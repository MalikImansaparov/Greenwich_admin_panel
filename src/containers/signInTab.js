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

export const SignInTab = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 585, height: 707 };
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
    <Paper
      elevation={3}
      style={paperStyle}
      sx={{
        ml: '100px',
        height: '707px',
        width: '585px',
        borderRadius: '20px',
      }}
    >
      <Box sx={{ width: '525px', textAlign: 'center' }}>
        <Typography
          sx={{
            color: 'black',
            fontSize: 48,
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
          <Tab label="Суперадминистратор" />
          <Tab label="Администратор" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <SignInSuperAdmin handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignInAdmin />
        </TabPanel>
      </Box>
    </Paper>
  );
};

