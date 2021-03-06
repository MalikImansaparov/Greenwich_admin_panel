import * as React from 'react';
import { Outlet } from 'react-router';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

export const Employers = () => {
  return (
      <Box>
        <Outlet />
        <Divider sx={{ width: '1080px', my: '20px' }} />
      </Box>
  );
};
