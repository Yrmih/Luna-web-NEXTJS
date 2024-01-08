'use client'

// external libraries
import { MaskUtils } from '@/utils/MaskUtils'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import SendIcon from '@mui/icons-material/Send'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useMediaQuery,
} from '@mui/material'
import { ChangeEvent } from 'react'
import { useLoginUseFormSate } from '../hooks/LoginUseFormStateContext'
import { useLoginStateDialogs } from '../hooks/LoginSateDialogsContext'
import { LoginInputsFrom } from '../types/formTypes'

export default function LoginAtendimentoDialog() {
  const matches = useMediaQuery('(min-width:900px)')
  const {
    openLoginAtendimentoDialog: open,
    onCloseLoginAtendimentoDialog: onClose,
  } = useLoginStateDialogs()

  const { handleSubmit, register, errors, setValue, isValid } =
    useLoginUseFormSate()

  const onSubmit = (data: LoginInputsFrom) => {
    console.log(data)
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Agora você deve digitar o número do seu atendimento.
      </DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={'2vh'}>
          É aquele número que você recebeu quando fez o primeiro acesso aqui.
          Você anotou ou fez uma foto dele? Caso não encontre o seu número,
          clique abaixo em &quot;Esqueceu Seu Número&quot;
        </DialogContentText>
        <TextField
          fullWidth
          id="input-atendimento"
          label="N° DE ATENDIMENTO"
          variant="standard"
          {...register('atendimento', {
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              setValue(
                'atendimento',
                MaskUtils.maskAtendimento(event.target.value),
              ),
          })}
          error={errors.atendimento !== undefined}
          helperText={
            errors.atendimento !== undefined
              ? errors.atendimento.message
              : 'Digite seu número de atendimento'
          }
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-around' }}>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          sx={{
            marginLeft: '2vw',
            marginBottom: '2vh',
            fontSize: '0.65rem',
            '@media (min-width:600px)': {
              fontSize: '1rem',
            },
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#005bc9' : '#757575',
            },
          }}
          variant="contained"
          endIcon={matches ? <SendIcon /> : ''}
        >
          Enviar
        </Button>
        <Button
          sx={{
            marginRight: '2vw',
            marginBottom: '2vh',
            fontSize: '0.65rem',
            '@media (min-width:600px)': {
              fontSize: '1rem',
            },
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#005bc9' : '#757575',
            },
          }}
          variant="contained"
          startIcon={matches ? <PhoneAndroidIcon /> : ''}
        >
          Esqueceu seu número ?
        </Button>
      </DialogActions>
    </Dialog>
  )
}
