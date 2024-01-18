// Internal
import ContentLayout from '@/components/ContentLayout'
import { ReactNode } from 'react'
import Footer from '../../components/Footer'
import { BottoMenu } from './components/BottoMenu'
import { AppBarAreaAssistido } from './components/Nav/AppBarAreaAssistido'
import { SnackbarAreaAssistido } from './components/SnackbarAreaAssistido'
import { SnackbarAreaAssistidoStateProvider } from './hooks/SnackbarAreaAssistidoStateProvider'

export const metadata = {
  title: 'Painel do Assistido',
  description: 'Área de acesso do assistido.',
}

export function PainelAssistidoLayout({ children }: { children: ReactNode }) {
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
      <BottoMenu />
      <Footer />
    </>
  )
}

export default PainelAssistidoLayout
