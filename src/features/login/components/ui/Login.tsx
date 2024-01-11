'use client'

// External
import { Box, Stack } from '@mui/material'

// Internal

import { LoginCPF } from './LoginCPF'
import { LoginAtendimentoDialog } from './LoginNumeroAtendimentoDialog'
import { CPFNaoEncontradoDialog } from './CPFNaoEncontradoDialog'
import { AtendimentoNaoEncontradoDialog } from './AtendimentoNaoEncontradoDialog'
import { RecuperarAtendimentoDialog } from './RecuperarAtendimentoDialog'
import { FalhaRecuperarAtendimentoDialog } from './FalhaRecuperarAtendimentoDialog'

export function Login() {
  return (
    <Stack
      bgcolor="white"
      height="100%"
      width="100%"
      display="flex"
      justifyContent={'center'}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? 'white' : '#171717',
      }}
    >
      {/* container página */}
      <Box
        marginLeft="5vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? 'white' : '#171717',
        }}
      >
        <Stack>
          <Stack component="form">
            <LoginCPF />
            <LoginAtendimentoDialog />
          </Stack>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CPFNaoEncontradoDialog />
            <AtendimentoNaoEncontradoDialog />
            <RecuperarAtendimentoDialog />
            <FalhaRecuperarAtendimentoDialog />
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
