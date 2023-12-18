'use client'

// External
import { Box, Stack } from '@mui/material'

// Framework

// Internal
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import AtendimentoNaoEncontradoDialog from './components/AtendimentoNaoEncontradoDialog'
import CPFNaoEncontradoDialog from './components/CPFNaoEncontradoDialog'
import FalhaRecuperarAtendimentoDialog from './components/FalhaRecuperarAtendimentoDialog'
import { LoginCPF } from './components/LoginCPF'
import LoginAtendimentoDialog from './components/LoginNumeroAtendimentoDialog'
import RecuperarAtendimentoDialog from './components/RecuperarAtendimentoDialog'
import { loginSchema } from './schemas/loginSchema'
import { LoginInputsFrom } from './types/formTypes'

export function Login() {
  const {
    register,
    setValue,
    formState: { errors, isValid, isLoading },
  } = useForm<LoginInputsFrom>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  })
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
            <LoginAtendimentoDialog
              register={register}
              errors={errors}
              setValue={setValue}
              isValid={isLoading}
              isLoading={isLoading}
            />
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
