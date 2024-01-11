// Third party
import { Box } from '@mui/material'

// Internal
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header da tela de Login */}
      {/* <AppBar
        sx={{
          position: 'sticky',
          top: 0,
        }}
      >
        header mobile
      </AppBar> */}
      <Header />
      {/* Container do conteúdo da página de Login */}
      <Box
        sx={{
          overflowY: 'scroll',
          flex: 'auto',
        }}
        component={'main'}
      >
        {children}
      </Box>

      {/* Footer da tela de Login */}
      <Footer />
    </>
  )
}
