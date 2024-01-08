'use client'

// External
import { Box, Stack } from '@mui/material'

// Framework

// Internal
import AtendimentoNaoEncontradoDialog from './components/AtendimentoNaoEncontradoDialog'
import CPFNaoEncontradoDialog from './components/CPFNaoEncontradoDialog'
import FalhaRecuperarAtendimentoDialog from './components/FalhaRecuperarAtendimentoDialog'
import { LoginCPF } from './components/LoginCPF'
import LoginAtendimentoDialog from './components/LoginNumeroAtendimentoDialog'
import RecuperarAtendimentoDialog from './components/RecuperarAtendimentoDialog'

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
