// Internal
import ContentLayout from '@/components/ContentLayout'
import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import Footer from '../../components/Footer'
import { AppBarAreaAssistido } from './components/Nav/AppBarAreaAssistido'

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
