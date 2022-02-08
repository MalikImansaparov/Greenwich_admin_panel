import { red } from '@mui/material/colors';
import { createTheme} from '@mui/material/styles';
// A custom theme for this app
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1512,
        },
    },
    typography: {
        fontFamily: [
            'Montserrat'
        ],
        color: {
            main: '#000000'
        }
    },
    palette: {
        primary: {
            main: '#487349',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#F8F3EC',
        }
    },
});

export default theme;

