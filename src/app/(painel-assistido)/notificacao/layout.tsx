// Internal
import { ReactNode } from 'react'

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
