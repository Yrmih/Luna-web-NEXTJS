import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

  function getTheme(prefersDarkMode: boolean){
    
    return createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
        primary: {
          main: prefersDarkMode? '#ced4ce': '#2E7D32',
        },
        secondary: {
          main: prefersDarkMode? '#076187': '#00C853',
        },
        background: {
          default: prefersDarkMode? '#161515': '#f4f7f9',
          paper: prefersDarkMode? '#181717': '#ffffff',
        },

      },
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
    })
  }

export default getTheme;