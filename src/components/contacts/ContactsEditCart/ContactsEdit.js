import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import * as React from "react";
import {ContactsEditCart} from "./ContactEditCart";
import {Header} from "../../header/header";
import BreadCrumb from "../../breadCrumbs";

export const ContactsEdit = () => {
    return (
      <Box>
        {/* <Header/> */}
        <BreadCrumb />
        <ContactsEditCart />
        <Divider sx={{ width: '1080px', my: '30px' }} />
      </Box>
    );
 }
