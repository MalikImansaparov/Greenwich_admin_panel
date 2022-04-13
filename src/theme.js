import { red } from '@mui/material/colors';
import { createTheme} from '@mui/material/styles';

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
        grey: {
            main: '#E1E1E1;',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#F8F3EC',
        },
        hover: {
         background: "#E6F0E6;"
        },
        placeholder: {
            default: '#487349;'
        }
    },

});

export default theme;

