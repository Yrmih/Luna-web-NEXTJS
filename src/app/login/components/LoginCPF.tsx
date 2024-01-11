// Third party
import { AccountCircle } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'

// Framework
import { ChangeEvent } from 'react'

// Internal
import { MaskUtils } from '@/utils/MaskUtils'
import { useLoginStateDialogs } from '../context/LoginSateDialogsContext'
import { useLoginUseFormSate } from '../context/LoginUseFormStateContext'

export function LoginCPF() {
  const { register, errors, setValue, dirtyFields } = useLoginUseFormSate()
  const { handlenCloseLoginAtendimentoDialog } = useLoginStateDialogs()

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
              : 'Digite seu número de CPF'
          }
          {...register('cpf', {
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              setValue('cpf', MaskUtils.maskCpfCnpj(event.target.value))
            },
          })}
        />
        <Button
          onClick={handlenCloseLoginAtendimentoDialog}
          disabled={errors.cpf !== undefined || !dirtyFields.cpf}
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
          Próximo
        </Button>
      </Box>
    </>
  )
}
