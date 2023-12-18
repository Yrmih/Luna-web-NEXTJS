import { AccountCircle } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { LoginInputsFrom } from '../types/formTypes'
import { ChangeEvent } from 'react'
import { MaskUtils } from '@/utils/MaskUtils'

export type LoginCpfProps = {
  register: UseFormRegister<LoginInputsFrom>
  errors: FieldErrors<LoginInputsFrom>
  setValue: UseFormSetValue<LoginInputsFrom>
}

export function LoginCPF({ register, errors, setValue }: LoginCpfProps) {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#023B7E' : 'white',
        }}
      >
        {`Olá, este é o Agendamento Virtual da ${process.env.NEXT_PUBLIC_DEFENSORIA_NOME}.`}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#023B7E' : 'white',
        }}
      >
        Para iniciar o atendimento digite o número do seu CPF:
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ mr: 1, my: 0.5 }} />
        <TextField
          sx={{ width: 200 }}
          id="input-cpf"
          label="CPF"
          variant="standard"
          error={errors.cpf !== undefined}
          helperText={
            errors.cpf !== undefined
              ? errors.cpf.message
              : 'Digite seu número de atendimento'
          }
          {...register('cpf', {
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              setValue('cpf', MaskUtils.maskCpfCnpj(event.target.value))
            },
          })}
        />
        <Button
          sx={{
            marginLeft: '2vw',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#005bc9' : '#757575',
            },
          }}
          variant="contained"
        >
          Enviar
        </Button>
      </Box>
    </>
  )
}
