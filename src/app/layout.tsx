// Framework
import { ReactNode } from 'react'

// Internal
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
