import Box from '@mui/material/Box';

import { ReactNode } from 'react';
import AppBarAreaAssistido from './components/AppBarAreaAssistido';
import DrawerMenuAreaAssistido from './components/DrawerMenuAreaAssistido';

export const metadata = {
    title: 'Painel do Assistido',
    description: 'Área de acesso do assistido.',
  };
  
  const DRAWER_WIDTH = 240;
  
  

function PainelAssistidoLayout({children}: {children: ReactNode}) {
  return (
    <main>
        <AppBarAreaAssistido/>
        <DrawerMenuAreaAssistido>
            {children}
        </DrawerMenuAreaAssistido>
    </main>
  )
}

export default PainelAssistidoLayout