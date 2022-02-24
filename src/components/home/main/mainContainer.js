import Box from "@mui/material/Box";
import {Header} from "../../header/header";
import {Main} from "./main";

export const MainContainer = () => {
  return (
      <Box sx={{mx:2}}>
        <Header/>
        <Main/>
      </Box>

  );
};
