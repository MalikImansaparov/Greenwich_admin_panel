import {styled} from "@mui/material";
import {Link} from "react-router-dom";
import {Item} from "../../../style";
import Box from "@mui/material/Box";

export const CustomButton = styled(Link)`
  height: 52px;
  width: 320px;
  background-color: #487349;
  padding: 14px 30px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  text-decoration: none
  &:hover {
    background-color: #9C9C9C;
  }
`;

export const CartItem = styled(Item)`
  height: 458px;
  width: 445px;
  border-radius: 20px;
  margin-left: 40px;
  cursor: pointer;
  padding-top: 0;
  &: hover {
    transform: scale(1.1);
    transition: transform 0.9s;
    border: 1px solid #487349;
  }
`;

export const CartList = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-size: 16px;
`;
export const CartText = styled('span')`
  color: #487349;
`;
