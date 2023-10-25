// Third party
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { PlayLessonTwoTone } from '@mui/icons-material'
import { PaletteOptions, alpha, createTheme, getContrastRatio } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})


function getTheme(prefersDarkMode: boolean) {

  const customPallete = {
    primary: {
      main: process.env.THEME_COLOR_PRIMARY_MAIN ?? '#2E7D32',
      light: '#42B148',
      dark: 'rgb(15 75 18)'
    },
    secondary: {
      main: process.env.THEME_COLOR_SECONDARY_MAIN ?? '#00C853',
    },
    background: {
      default: process.env.THEME_COLOR_BACKGROUND_DEFAULT ?? '#f4f7f9',
      paper: process.env.THEME_COLOR_BACKGROUND_PAPER || '#ffffff',
    },
  }

  const palette: PaletteOptions = prefersDarkMode
    ? {
      mode: 'dark',
      ...customPallete,
      primary: {
        main: '#2E7D32',
        light: '#48BE4E',
        dark:'rgb(25 126 30)'
      },
      secondary: {
        main: '#4CCA52',
      },
      background: {
        default: process.env.THEME_COLOR_BACKGROUND_DEFAULT ?? '#070707',
        paper: process.env.THEME_COLOR_BACKGROUND_PAPER ?? '#0F0F0F',
      },

    }
    : customPallete


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
      MuiCssBaseline: {
        styleOverrides: {
          'html, body': {
            width: '100%',
            height: '100%'
          },
          footer: {
            border: `2px solid`,
            borderTopWidth: "3px",
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            pedding: '5px',

          },
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
