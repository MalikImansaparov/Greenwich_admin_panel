import logo from "../../../assets/img/Greenwich.svg"
import Box from "@mui/material/Box";

export const SignInLogo = () => {
    return (
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          height: '108px',
          width: '525px',
          marginRight: '100px',
          alignSelf: 'center',
        }}
      ></Box>
    );
}
