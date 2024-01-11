// Third party
import { CssBaseline } from '@mui/material'

// Framework
import { ReactNode } from 'react'

// Internal
import { ContentLayout } from '@/components/ContentLayout'

import { AppBarAreaAssistido } from '../../features/painel-assistido/components/ui/Nav/AppBarAreaAssistido'
import { SnackbarAreaAssistido } from '../../features/painel-assistido/components/ui/SnackbarAreaAssistido'

import { Footer } from '@/components/Footer'
import { BottonMenu } from '@/features/painel-assistido/components/ui/BottonMenu'
import { SnackbarAreaAssistidoStateProvider } from '@/features/painel-assistido/context'

export const metadata = {
  title: 'Painel do Assistido',
  description: 'Área de acesso do assistido.',
}

export async function PainelAssistidoLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <CssBaseline />
      {/* Navbar e Sidebar parte do <header> */}
      <AppBarAreaAssistido />
      {/* Conteúdo parte da <main> */}

      <ContentLayout>
        <SnackbarAreaAssistidoStateProvider>
          {children}
          <SnackbarAreaAssistido />
        </SnackbarAreaAssistidoStateProvider>
      </ContentLayout>
      {/* Footer parte do <footer> */}
      <BottonMenu />
      <Footer />
    </>
  )
}

export default PainelAssistidoLayout
