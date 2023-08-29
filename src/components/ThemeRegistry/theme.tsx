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
      },
    })
  }



export default getTheme;