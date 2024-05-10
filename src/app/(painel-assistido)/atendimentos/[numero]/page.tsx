'use client'
import { Box, Paper, Typography } from '@mui/material'
import { DetalhesDoPedido } from '../components/page'

export default function DetalhesDoPedidoPage({
  params: { numero },
}: {
  params: { numero: string }
}) {
  return (
    <>
      <Box
        sx={{
          p: 0,
          m: 0,
        }}
      >
        <Paper sx={{ p: 0, m: 0 }}>
          <Box
            color="white"
            fontWeight={600}
            fontSize={'1.5rem'}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.primary.main
                  : '#171717',
              paddingTop: '4vh',
              paddingLeft: '5vh',
              width: '100%',
              height: '25vh',
            }}
          >
            AÇÃO DE ALIMENTOS
            <Typography
              sx={{
                color: 'white',

                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              {numero}
            </Typography>
          </Box>
        </Paper>
      </Box>
      <DetalhesDoPedido />
    </>
  )
}
