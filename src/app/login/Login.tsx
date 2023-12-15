'use client'

// External
import { Box, Stack } from '@mui/material'

// Framework
import { useState } from 'react'

// Internal
import AtendimentoNaoEncontradoDialog from './components/AtendimentoNaoEncontradoDialog'
import CPFNaoEncontradoDialog from './components/CPFNaoEncontradoDialog'
import FalhaRecuperarAtendimentoDialog from './components/FalhaRecuperarAtendimentoDialog'
import { LoginCPF } from './components/LoginCPF'
import LoginAtendimentoDialog from './components/LoginNumeroAtendimentoDialog'
import RecuperarAtendimentoDialog from './components/RecuperarAtendimentoDialog'

export function Login() {
  // controlador do popover Atendimento
  const [openAtendimento, setOpenAtendimento] = useState(false)

  const handleClickOpenAtendimento = () => {
    setOpenAtendimento(true)
  }

  const handleCloseAtendimento = () => {
    setOpenAtendimento(false)
  }

  // controlador do popover Atendimento não encontrado
  const [openAtendimentoNaoEncontrado, setOpenAtendimentoNaoEncontrado] =
    useState(false)

  const handleCloseAtendimentoNaoEncontrado = () => {
    setOpenAtendimentoNaoEncontrado(false)
  }

  // controlador do popover recuperar N° de atendimento
  const [openRecuperarAtendimento, setOpenRecuperarAtendimento] =
    useState(false)

  const handleClickOpenRecuperarAtendimento = () => {
    setOpenRecuperarAtendimento(true)
  }

  const handleCloseRecuperarAtendimento = () => {
    setOpenRecuperarAtendimento(false)
  }

  // controlador do popover falha recuperar N° de atendimento
  const [openFalhaRecuperarAtendimento, setOpenFalhaRecuperarAtendimento] =
    useState(false)

  const handleClickOpenFalhaRecuperarAtendimento = () => {
    setOpenFalhaRecuperarAtendimento(true)
  }

  const handleCloseFalhaRecuperarAtendimento = () => {
    setOpenFalhaRecuperarAtendimento(false)
  }

  // controlador do popover CPF não encontrado
  const [openCpfNaoEncontrado, setOpenCpfNaoEncontrado] = useState(false)

  const handleCloseCpfNaoEncontrado = () => {
    setOpenCpfNaoEncontrado(false)
  }

  const onSubmit = async (data: any) => {
    console.log('dados: ', data)
  }

  return (
    // container

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
          <LoginCPF />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CPFNaoEncontradoDialog />
            <LoginAtendimentoDialog />
            <AtendimentoNaoEncontradoDialog />
            <RecuperarAtendimentoDialog />
            <FalhaRecuperarAtendimentoDialog />
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
