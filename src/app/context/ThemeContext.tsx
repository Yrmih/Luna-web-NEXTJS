'use client'

// Third party
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

// Framework
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

// Internal
import { setThemeColorModeToCookie } from '../services'
import { getTheme } from './theme'

type ThemeColorModeState = {
  toggleColorMode: () => void
}

const ThemeColorModeContext = createContext<ThemeColorModeState | undefined>(
  undefined,
)

export function ThemeColorModeProvider({
  children,
  currentThemeColorMode: currentThemeMode,
}: {
  children: ReactNode
  currentThemeColorMode: PaletteMode | undefined
}) {
  const [mode, setMode] = useState<PaletteMode>(currentThemeMode ?? 'light')

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) => {
      const mode = prevMode === 'light' ? 'dark' : 'light'
      setThemeColorModeToCookie(mode)
      return mode
    })
  }

  const colorMode = useMemo(
    () => ({
      toggleColorMode,
    }),
    [],
  )
  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ThemeColorModeContext.Provider value={colorMode}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </ThemeColorModeContext.Provider>
  )
}

export const useThemeColorMode = () => {
  const context = useContext(ThemeColorModeContext)

  if (!context) {
    throw new Error(
      'useThemeColorMode só pode ser usado dentro do provider ThemeColorModeProvider',
    )
  }

  return context
}
