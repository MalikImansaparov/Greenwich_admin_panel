import Box from "@mui/material/Box";
import {Header} from "../header/header";
import {OnlyBreadCrumbs} from "../onlyBreadCrumbs";

export const Contacts = () => {
    return (
        <Box sx={{mx:2}}>
           <Header/>
           <OnlyBreadCrumbs/>
        </Box>
    )
 }
