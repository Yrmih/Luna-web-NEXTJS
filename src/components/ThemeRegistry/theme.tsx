// Third party
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { PaletteOptions, createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

function getTheme(prefersDarkMode: boolean) {
  const palette: PaletteOptions = prefersDarkMode
    ? {
        mode: 'dark',
      }
    : {
        primary: {
          main: process.env.THEME_COLOR_PRIMARY_MAIN || '#1976d2',
        },
        secondary: {
          main: process.env.THEME_COLOR_SECONDARY_MAIN || '#9c27b0',
        },
        background: {
          default: process.env.THEME_COLOR_BACKGROUND_DEFAULT || '#fff',
          paper: process.env.THEME_COLOR_BACKGROUND_PAPER || '#fff',
        },
      }

  return createTheme({
    palette,
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
            }),
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 2,
            }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 2,
            }),
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 4,
            }),
        },
      },
    },
  })
}

export default getTheme
