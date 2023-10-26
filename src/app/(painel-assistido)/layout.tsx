// Internal
import { ReactNode } from 'react'
import { AppBarAreaAssistido } from './components/Nav/AppBarAreaAssistido'
import Footer from '../../components/Footer';
import { CssBaseline } from '@mui/material';



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
      <CssBaseline />
      <footer style={{marginTop:35}}>
        <Footer />
        </footer>
    </>
  )
}

export default PainelAssistidoLayout
