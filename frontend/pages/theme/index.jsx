import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      light: '#5b5b5b',
      main: '#ffffff',
      dark: '#232323',
      none: 'transparent',
    },
    secondary: {
      light: '#af52bf',
      main: '#f48e06',
      dark: '#dd7e00',
    }
  },
  typography: {
    fontFamily: 'Helvetica, sans-serif',
  },

});

export default theme