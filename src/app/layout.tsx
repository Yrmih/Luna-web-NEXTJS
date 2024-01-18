// Framework
import { ReactNode } from 'react'
import './global.css'

// Internal
import { ThemeRegistry } from '@/components/ThemeRegistry/ThemeRegistry'
import { AuthProvider } from 'providers/auth-provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AuthProvider>
      </body>
    </html>
  )
}
