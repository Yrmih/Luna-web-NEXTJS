// Third party
import { CssBaseline } from '@mui/material'

// Framework
import { ReactNode } from 'react'

// Internal
import ContentLayout from '@/components/ContentLayout'
import Footer from '../../components/Footer'
import { BottonMenu } from './components/ui/BottonMenu'
import { AppBarAreaAssistido } from './components/ui/Nav/AppBarAreaAssistido'
import { SnackbarAreaAssistido } from './components/ui/SnackbarAreaAssistido'
import { SnackbarAreaAssistidoStateProvider } from './context/SnackbarAreaAssistidoStateProvider'

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
