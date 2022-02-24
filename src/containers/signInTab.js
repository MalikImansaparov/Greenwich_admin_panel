import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import {SignInAdmin} from "../components/authentication/view/signInAdmin";

export const SignInTab = () => {
  const paperStyle = { maxWidth: 585};

  return (
    <Paper
      elevation={3}
      style={paperStyle}
      sx={{
        ml: '100px',
        height: '607px',
        width: '485px',
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
              width: '485px'
          }}
        />
        <SignInAdmin/>
      </Box>
    </Paper>
  );
};

