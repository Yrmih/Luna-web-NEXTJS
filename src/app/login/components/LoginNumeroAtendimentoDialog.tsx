'use client'

// external libraries
import { MaskUtils } from '@/utils/MaskUtils'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import SendIcon from '@mui/icons-material/Send'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  TextField,
  useMediaQuery,
} from '@mui/material'
import { ChangeEvent } from 'react'
import { useLoginUseFormSate } from '../hooks/LoginUseFormStateContext'
import { useLoginStateDialogs } from '../hooks/LoginSateDialogsContext'
import { LoginInputsFrom } from '../types/formTypes'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function LoginAtendimentoDialog() {
  const matches = useMediaQuery('(min-width:900px)')
  const router = useRouter()
  const {
    openLoginAtendimentoDialog: open,
    handlenCloseLoginAtendimentoDialog: onClose,
    handleCloseAtendimentoNaoEncontradoDialog,
  } = useLoginStateDialogs()

  const { handleSubmit, register, errors, setValue, isValid, isSubmitting } =
    useLoginUseFormSate()

  const onSubmit = async (data: LoginInputsFrom) => {
    const cpf = MaskUtils.getOnlyDigits(data.cpf)
    const atendimento = MaskUtils.getOnlyDigits(data.atendimento)
    try {
      const response = await signIn('credentials', {
        redirect: false,
        cpf,
        atendimento,
      })

      if (response?.error) {
        onClose()
        handleCloseAtendimentoNaoEncontradoDialog()
      } else {
        router.push('/atendimentos')
      }
    } catch (error) {
      throw Error(`[LOGIN_ERROR]: ${error}`)
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ width: '100%', display: isSubmitting ? undefined : 'none' }}>
        <LinearProgress />
      </Box>
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
