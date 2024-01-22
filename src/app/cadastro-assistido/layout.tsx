// Internal
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@mui/material'

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <>
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
