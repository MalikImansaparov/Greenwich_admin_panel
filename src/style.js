import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
}));

