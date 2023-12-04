import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface ContentProps {
  children?: ReactNode
}

const ContentLayout = ({ children }: ContentProps) => {
  return (
    <>
      {/* Captura área para conteúdo */}
      <Box
        sx={{
          overflowY: 'scroll', // Fixa o footer e o header na tela, fazendo com que o main tenha o controle do scroll
          flex: 'auto', // Garante que a área do main ocupará sempre 100% do espaço entre header e footer além de adaptar com base na quantidade de elementos que há, criando o scroll se necessário.
          marginLeft: { xs: '0px', sm: '240px' }, // Espaço para sidebar quando em PC, não necessário em Mobile
          paddingBottom: '20px', // Padding para garantir que o footer não oculte conteudo do main
        }}
        component={'main'}
      >
        {children}
      </Box>
    </>
  )
}

export default ContentLayout
