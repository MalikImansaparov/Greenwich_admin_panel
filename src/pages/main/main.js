import Box from "@mui/material/Box";
import {HomeTab} from "../../containers/homeTab";
import {Header} from "../../components/header/header";

export const Main = () => {
  return (
    <Box>
      <Box sx={{ my: '28px', mx: '5px' }}>
        <Header />
        <HomeTab />
      </Box>
    </Box>
  );
};
