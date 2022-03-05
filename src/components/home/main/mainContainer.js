import Box from "@mui/material/Box";
import {Header} from "../../header/header";
import {Main} from "./main";
import {Divider} from "@mui/material";
import * as React from "react";

export const MainContainer = () => {
  return (
      <Box sx={{mx:2}}>
        <Header/>
        <Main/>
          <Divider sx={{width:'1080px', my:'30px'}}/>
      </Box>

  );
};
