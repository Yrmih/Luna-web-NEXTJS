// Framework
import './global.css'
import { ReactNode } from 'react'

// Internal
import { ThemeRegistry } from '@/components/ThemeRegistry/ThemeRegistry'
import { CssBaseline } from '@mui/material'
import { AuthProvider } from 'providers/auth-provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body>
          <ThemeRegistry>
            <CssBaseline />
            {children}
          </ThemeRegistry>
        </body>
      </html>
    </AuthProvider>
  )
}
