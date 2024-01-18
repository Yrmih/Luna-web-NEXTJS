// framework
import { ReactNode } from 'react'

// Internal
import { ContentLayout } from '@/components/ContentLayout'
import Footer from '@/components/Footer'
import {
  AppBarAreaAssistido,
  BottonMenu,
  SnackbarAreaAssistido,
} from './components'
import { SnackbarAreaAssistidoStateProvider } from './context'

export const metadata = {
  title: 'Painel do Assistido',
  description: 'Área de acesso do assistido.',
}

export default function PainelAssistidoLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
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
