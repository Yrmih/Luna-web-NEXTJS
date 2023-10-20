// Internal
import { ReactNode } from 'react'
import { AppBarAreaAssistido } from './components/AppBarAreaAssistido'
import { DrawerMenuAreaAssistido } from './components/DrawerMenuAreaAssistido'

export const metadata = {
  title: 'Painel do Assistido',
  description: 'Área de acesso do assistido.',
}

function PainelAssistidoLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <nav>
      <DrawerMenuAreaAssistido>{children}</DrawerMenuAreaAssistido>
    </nav>
    <main>
      <AppBarAreaAssistido />
      </main>
    </>
  )
}

export default PainelAssistidoLayout
