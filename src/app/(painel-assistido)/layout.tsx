// Internal
import { ReactNode } from 'react'
import { AppBarAreaAssistido } from './components/Nav/AppBarAreaAssistido'
import Footer from '../../components/Footer'
import ContentLayout from '@/components/ContentLayout'
import { Box, CssBaseline } from '@mui/material'

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
      <ContentLayout> {children} </ContentLayout>
      {/* Footer parte do <footer> */}
      <Footer />
    </>
  )
}

export default PainelAssistidoLayout
