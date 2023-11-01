import { AppBar, Box } from '@mui/material'
import Footer from '@/components/Footer'
import { Header } from '@/app/login/components/Header/Header'

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
