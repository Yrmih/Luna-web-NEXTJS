// Internal
import { ReactNode } from 'react'
import { AppBarAreaAssistido } from './components/Nav/AppBarAreaAssistido'



export const metadata = {
  title: 'Painel do Assistido',
  description: 'Área de acesso do assistido.',
}

function PainelAssistidoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <AppBarAreaAssistido>{children}</AppBarAreaAssistido>
      </main>
    </>
  )
}

export default PainelAssistidoLayout
