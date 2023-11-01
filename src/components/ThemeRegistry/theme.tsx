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
        light: '#4CCA52',
        dark: 'rgb(20 102 24)'
      },
      secondary: {
        main: '#4CCA52',
        light: '#5FFF67',
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
            marginTop: 'auto',
            textAlign: 'center',
            display: 'relative',
            bottom: 0,
          },
          body: {
            fontfamily: 'Roboto, sans-serif, Roboto Mono',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            fontWeight: 400,
            scrollbarWidth: 'thin',
            scrollbarcolor: 'rgb(4 121 0) rgb(226, 225, 225)',
            width: '100%',
            flex: 1
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
      MuiLink: {
        defaultProps: {
          underline: 'hover', // Remove o sublinhado ao passar o mouse
        },
        styleOverrides: {
          root: {
            color: "text.secondary", // Define a cor do texto do link
            fontSize: '16px', // Define o tamanho da fonte
            fontWeight: 'bold', // Define o estilo da fonte (negrito)
            '&:hover': {
              color: customPallete.primary.main, // Define a cor do texto ao passar o mouse
            },
          },
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
