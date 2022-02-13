import {styled} from "@mui/system";
import TextField from "@mui/material/TextField";
import React from "react";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const InputWrapper = styled('input')`
  width: 300px;
  height: 52px;
  background: #E6F0E6;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  ::placeholder,
  ::-webkit-input-placeholder {
    color:#487349;
  }
  :-ms-input-placeholder {
     color: #487349;
  }
`;

export const Search = () => {
    return (
        <InputWrapper
            name="search"
            type="string"
            placeholder="Поиск"
            />
    )
}
