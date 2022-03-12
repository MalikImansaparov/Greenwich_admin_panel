import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Item} from "../../../../style";
import {OrderFlorist} from "./orderFlorist";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    width: '1060px'
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    height: '300px'
}));

export default function StatisticFlorist() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Item sx={{marginTop: '50px', width: '1060px'}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                       sx={{ borderRadius: '20px 20px 0 0 '}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '10px 30px'}}>
                    <Typography sx={{ width: '40%', flexShrink: 0, fontSize: '24px' }}>
                        Динамика работы флористов
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '20px' }}>1245 продаж</Typography>
                </Box>

            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={{ width: '25%', flexShrink: 0 }}>
                        Алина Оразакунова
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}> 378 продаж</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OrderFlorist/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{ width: '25%', flexShrink: 0 }}>
                        Вероника Викторовна
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}> 370 продаж</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OrderFlorist/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{ width: '25%', flexShrink: 0 }}>
                        Айгуль Байгазиева
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}> 308 продаж</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OrderFlorist/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{ width: '25%', flexShrink: 0 }}>
                        Дастан Кыдырбеков
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}> 278 продаж</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OrderFlorist/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel3')}
                       sx={{ borderRadius: '0 0 20px 20px '}}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{ width: '25%', flexShrink: 0 }}>
                        Карина Муратова
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}> 208 продаж</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OrderFlorist/>
                </AccordionDetails>
            </Accordion>
        </Item>
    );
}
