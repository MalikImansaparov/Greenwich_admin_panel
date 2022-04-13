import Box from "@mui/material/Box";
import {Header} from "../../header/header";
import {Divider} from "@mui/material";
import * as React from "react";
import {ContactsCarts} from "./contactsCart";

export const Contacts = () => {
    return (
      <Box>
         <Header/>
        <ContactsCarts />
        <Divider sx={{ width: '1060px', my: '30px' }} />
      </Box>
    );
 }
