import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import avatar from "../../assets/img/avater.svg";
import * as React from "react";
import {Search} from "../search";
import BreadCrumb from "../breadCrumbs";


export const Header = () => {
    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', my: '40px',}}>
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
            <Box sx={{display: 'flex', }}>
                <BreadCrumb/>
                <Search/>
            </Box>
        </div>

    );
};
