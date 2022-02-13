import { Header } from "../header/header";
import {EmployersTable} from "./EmployersTable/EmployersTable";
import {styled} from "@mui/system";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

const CustomButton = styled(Button)`
  height: 52px;
  width: 320px;
  background-color: #487349;
  padding: 14px 30px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  &:hover {
    background-color: #9C9C9C;
  }
`;

export const Employers = () => {
return (
  <div sx={{ ml: '20px' }}>
     <Header/>
      <Box sx={{mb: '24px', ml: '20px', display: 'flex', justifyContent: 'space-between'}}>
          <Typography
              sx={{
                  color: 'black',
                  fontSize: 24,
                  fontWeight: 600,
              }}
          >
              Сотрудники
          </Typography>
          <CustomButton>
              Добавить сотрудника
          </CustomButton>
      </Box>
    <EmployersTable/>
  </div>
);
}
