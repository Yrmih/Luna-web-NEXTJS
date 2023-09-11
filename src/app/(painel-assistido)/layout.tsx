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
    <main>
      <AppBarAreaAssistido />
      <DrawerMenuAreaAssistido>{children}</DrawerMenuAreaAssistido>
    </main>
  )
}

export default PainelAssistidoLayout
