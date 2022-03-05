import {styled} from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import React, {useState} from "react";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {searchOrders} from "../store/actionType/ordersAction";
import {AsyncOrders} from "../store/asyncAction/asyncOrders";


const SearchWrapper = styled('input')`
  max-width: 380px;
  height: 48px;
  background: #E6F0E6;
  border-radius: 20px 0 0 20px;
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
const ButtonWrapper = styled('button')`
  width: 60px;
  height: 48px;
  background: #E6F0E6;
  border-radius: 0 20px 20px 0px;
  border: none;
  outline: none;
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  ::placeholder,
  ::-webkit-input-placeholder {
    color:#487349;
  }
  :-ms-input-placeholder {
     color: #487349;
  }
  &:hover {
  background: #E6F0E6;
  }
`;

export const Search = () => {
    const dispatch = useDispatch()
    const [searchValue,  setSearchValue] = useState('')

    const handleClick = () => {
        dispatch(AsyncOrders(searchValue))
    }

    return (
        <Box sx={{display: 'flex'}}>
            <SearchWrapper
                name="search"
                type="string"
                placeholder="Поиск"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <ButtonWrapper onClick={() => handleClick()}>
                <SearchIcon />
            </ButtonWrapper>
        </Box>

    )
}
