import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import avatar from "../../assets/img/avater.svg";
import * as React from "react";
import {Search} from "../search";
import { useEffect, useState } from 'react';

export const Header = () => {
  const [name, setName] = useState(localStorage.getItem('firstName'));
  const [surename, setSurename] = useState(localStorage.getItem('lastName'));

  useEffect(() => {
    if (name.length || surename.length === 0) {
      setName('Тимур ');
      setSurename('Одинцев');
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        my: '40px',
        mr: '15px',
      }}
    >
      <Box>
        <Search />
      </Box>
      <Box sx={{ display: 'flex', color: '#487349', cursor: 'pointer' }}>
        <Typography
          sx={{
            width: '200px',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 600,
            mt: '8px',
            mr: '5px',
          }}
        >
          <span style={{ marginLeft: '10px' }}>{name}</span>
          <span>{surename}</span>
        </Typography>
      </Box>
    </Box>
  );
};
