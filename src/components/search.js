import {styled} from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const SearchWrapper = styled('input')`
  position: absolute;
  right: 45px;
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
        <SearchWrapper
            icon={<SearchIcon />}
            iconPosition="end"
            name="search"
            type="string"
            placeholder="Поиск"
            />
    )
}
