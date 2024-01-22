// Internal
import { ReactNode } from 'react'

export const metadata = {
  title: 'Painel do Assistido',
  description: 'Área de acesso do assistido.',
}
export default function NotificacaoLayout({
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
