// Internal
import ContentLayout from '@/components/ContentLayout'
import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
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
        {children}
        {modal}
    </>
  )
}

export default PainelAssistidoLayout
