import {styled} from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import {NavLink} from "react-router-dom";

export const ListText = styled(ListItemText)`
   font-size: 20px;
   font-weight: 700;
  `;

export const Item = styled(ListItem)`
    max-width: 205px;
    display: 'block';
    margin: 10px auto;
    &: hover {
      background: #e6f0e6;
      border-radius: 20px;
    };
    &: active {
      background: main;
      border-radius: 20px;
    }
  `;
export const NavList = styled(NavLink)`
    display: flex;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    &: hover {
      color: #487349;
    }
  `;
export const Img = styled('img')`
    width: 30px;
    height: 40px;
  `;
