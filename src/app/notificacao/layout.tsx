// Internal
import ContentLayout from '@/components/ContentLayout'
import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import Footer from '../../components/Footer'
import { AppBarAreaAssistido } from '../(painel-assistido)/components/Nav/AppBarAreaAssistido'
import TituloPageAtual from '@/components/TituloPageAtual'

export const metadata = {
  title: 'Painel do Assistido',
  description: 'Área de acesso do assistido.',
}
function PainelAssistidoLayout({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <>
      <CssBaseline />
      {/* Navbar e Sidebar parte do <header> */}
      <AppBarAreaAssistido />
      {/* Conteúdo parte da <main> */}
      <ContentLayout>
        {children}
        {modal}
      </ContentLayout>
      {/* Footer parte do <footer> */}
      <Footer />
    </>
  )
}

export default PainelAssistidoLayout
