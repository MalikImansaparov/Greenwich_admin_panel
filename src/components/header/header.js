import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import avatar from "../../assets/img/avater.svg";
import * as React from "react";
import {Search} from "../search";

export const Header = () => {
    return (
            <Box sx={{display: 'flex', justifyContent: 'space-between', my: '40px', mr: '15px'}}>
                <Box>
                   <Search/>
                </Box>
                <Box sx={{display: 'flex',
                    color: '#487349',
                    cursor:'pointer',
                }}>
                    <Typography sx={{
                        width: '250px',
                        textAlign: 'center',
                        fontSize: 22,
                        fontWeight: 600,
                        mt: '8px',
                        mr: '10px',
                    }}>
                        Малик Имансапаров
                    </Typography>
                    <img src={avatar} alt='avatar' sx={{mt:'20px'}}/>
                </Box>
            </Box>
    );
};
