'use client'

// Third party
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'

// Framework
import { ReactNode, useMemo } from 'react'

// Internal
import NextAppDirEmotionCacheProvider from './EmotionCache'
import getTheme from './theme'

export function ThemeRegistry({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(() => getTheme(prefersDarkMode), [prefersDarkMode])

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
