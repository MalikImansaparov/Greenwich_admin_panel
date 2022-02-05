import logo from "../../assets/img/Greenwich.svg"
import Box from "@mui/material/Box";

export const MainLogo = () => {
    return (
        <Box
            component='img'
            src={logo}
            alt="logo"
            sx={{
            height: '108px',
            width: '525px',
                marginRight: '120px',
                alignSelf: 'center'

        }}>
        </Box>
            )
}
