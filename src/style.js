import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: '20px',
}));

export const ItemWrapper = styled(Item)`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 550px;
 width: 1060px;
 border-radius: 20px;
 margin-top: 38px;                  
`

