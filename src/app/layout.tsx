// Framework
import { ReactNode } from 'react'
import './global.css'

// Internal
import { ThemeColorModeProvider } from '@/app/context'
import { AuthProvider } from 'providers/auth-provider'
import { getThemeColorModeFromCookie } from './services'

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const themeColorMode = await getThemeColorModeFromCookie()

  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          <ThemeColorModeProvider currentThemeColorMode={themeColorMode}>
            {children}
          </ThemeColorModeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
