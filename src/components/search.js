import {styled} from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";


const SearchWrapper = styled('input')`
  position: absolute;
  left: 60%;
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
