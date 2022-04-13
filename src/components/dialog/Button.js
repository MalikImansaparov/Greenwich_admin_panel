import React from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/system";

const CustomButton = styled(Button)`
  height: 56px;
  width: 100%;
  border-radius: 0;
  padding: 0;
  color: #487349;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid #487349;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margin: 0;
  &:hover {
    color: white;
    background-color: #9C9C9C;
  }
  &:not(:first-of-type){
  margin-left: 0;
  color: white;
  background-color: #487349;
}`;

export default function Buttons(props) {
    const { text, onClick, ...other } = props

    return (
        <CustomButton
            onClick={onClick}
            {...other}>
            {text}
        </CustomButton>
    )
}
