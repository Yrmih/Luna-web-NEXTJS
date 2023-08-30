import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PaletteOptions, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

  function getTheme(prefersDarkMode: boolean){
    const palette: PaletteOptions = prefersDarkMode? { 
      mode: 'dark' 
    }: { 
      primary: {
        main: '#2E7D32',
      },
      secondary: {
        main: '#00C853',
      },
      background: {
        default: '#f4f7f9',
        paper: '#ffffff',
      }
    }

    return createTheme({
      palette: palette,
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
    })
  }

export default getTheme;