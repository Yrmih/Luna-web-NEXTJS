// Internal
import ContentLayout from '@/components/ContentLayout'
import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import Footer from '../../components/Footer'
import { AppBarAreaAssistido } from './components/Nav/AppBarAreaAssistido'
import { BottoMenu } from './components/BottoMenu'

export const metadata = {
  title: 'Painel do Assistido',
  description: 'Área de acesso do assistido.',
}
function PainelAssistidoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline />
      {/* Navbar e Sidebar parte do <header> */}
      <AppBarAreaAssistido />
      {/* Conteúdo parte da <main> */}

      <ContentLayout>{children}</ContentLayout>
      {/* Footer parte do <footer> */}
      <BottoMenu />
      <Footer />
    </>
  )
}

export default PainelAssistidoLayout
