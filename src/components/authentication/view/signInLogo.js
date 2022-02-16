import logo from "../../../assets/img/Greenwich.svg"
import flowers from "../../../assets/img/Flowers.svg"
import Box from "@mui/material/Box";

export const SignInLogo = () => {
    return (
        <Box >
            <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                    height: '108px',
                    width: '525px',
                    marginRight: '50px',
                    alignSelf: 'center',
                    marginBottom: '25px',
                    marginTop: '135px',
                    paddingLeft: '25px'
                }}
            ></Box>
            <Box
                component="img"
                src={flowers}
                alt="logo"
                sx={{
                    width: '610px',
                    alignSelf: 'center',
                }}
            ></Box>
        </Box>

    );
}
