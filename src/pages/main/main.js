import Box from "@mui/material/Box";
import Products from "../products/product";
import Elevation from "../card/card";
import {Statistic} from "../statistic/statistic";
import Analityc from "../statistic/styles";

export const Main = () => {
  return (
    <Box pt={10} >
        <Elevation/>
      <Products/>
      <Statistic/>
      <Analityc/>
    </Box>
  );
};
