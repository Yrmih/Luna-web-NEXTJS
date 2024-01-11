'use client'

// Third party
import { zodResolver } from '@hookform/resolvers/zod'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

// Framework
import { ChangeEvent } from 'react'

// Internal
import { MaskUtils } from '@/utils/MaskUtils'
import { useSnackbarAreaAssistidoState } from '../context/SnackbarAreaAssistidoStateProvider'
import { editarContatoSchema } from './editar-contato-schema'
import { EditarContatoInputsForm } from './form-types'
import { atualizarContato } from './services'

const FORMULARIO_CAMPOS_EDITAR_CONTATO = [
  {
    label: 'E-mail',
    textHelper: 'Endereço de E-mail principal',
    placeHolder: 'exemplo@exemplo.com',
    icon: <MailOutlineIcon />,
  },
  {
    label: 'Número de Celular',
    textHelper: 'Número de Celular com DDD',
    placeHolder: '(99) 99999-9999',
    icon: <WhatsAppIcon />,
  },
  {
    label: 'Número de Telefone',
    textHelper: 'Número de telefone fixo.',
    placeHolder: '(99) 9999-9999',
    icon: <LocalPhoneIcon />,
  },
]

export function EditarContato() {
  const {
    register,
    setValue,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
  } = useForm<EditarContatoInputsForm>({
    mode: 'onChange',
    resolver: zodResolver(editarContatoSchema),
  })
  const { showSnackbarAreaAssistido } = useSnackbarAreaAssistidoState()

  const onSubmit: SubmitHandler<EditarContatoInputsForm> = async (data) => {
    const response = await atualizarContato(data)
    if (response.success) {
      showSnackbarAreaAssistido('Contato Atualizado com sucesso!', 'success')
    } else {
      showSnackbarAreaAssistido('Erro ao atualizar contato!', 'error')
    }
  }

  return (
    <Box
      sx={{
        p: 0,
        m: 0,
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 0,
          m: 0,
          height: '85vh',
        }}
      >
        <Box
          color="white"
          fontWeight={600}
          fontSize={'1.5rem'}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.primary.main
                : '#171717',
            paddingTop: '8vh',
            paddingLeft: '5vh',
            width: '100%',
            height: '25vh',
          }}
        >
          Meus Atendimentos
        </Box>
        <Stack
          direction={'column'}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? 'white' : '#1b1b1b',
            padding: '2vh',
            paddingTop: '8vh',
            paddingBottom: '8vh',
            paddingLeft: '8vh',
            height: '45vh',
            boxShadow: 2,
            borderRadius: '3vh',
            marginTop: '-8vh',
            alignItems: 'left',
            width: '70vw',
            '@media (min-width:900px)': {
              width: '45vw',
            },
          }}
        >
          <Typography variant="h6">Atualize seus dados de contato!</Typography>

          <TextField
            sx={{
              width: '50vw',
              '@media (min-width:900px)': {
                width: '35vw',
              },
            }}
            variant="standard"
            {...register('email')}
            error={errors.email !== undefined}
            helperText={
              errors.email !== undefined
                ? errors.email.message
                : FORMULARIO_CAMPOS_EDITAR_CONTATO[0].textHelper
            }
            label={FORMULARIO_CAMPOS_EDITAR_CONTATO[0].label}
            placeholder={FORMULARIO_CAMPOS_EDITAR_CONTATO[0].placeHolder}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {FORMULARIO_CAMPOS_EDITAR_CONTATO[0].icon}
                </InputAdornment>
              ),
            }}
          />

          <TextField
            sx={{
              width: '50vw',
              '@media (min-width:900px)': {
                width: '35vw',
              },
            }}
            {...register('celular', {
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setValue('celular', MaskUtils.maskCelular(event.target.value))
              },
            })}
            variant="standard"
            error={errors.celular !== undefined}
            helperText={
              errors.celular !== undefined
                ? errors.celular.message
                : FORMULARIO_CAMPOS_EDITAR_CONTATO[1].textHelper
            }
            label={FORMULARIO_CAMPOS_EDITAR_CONTATO[1].label}
            placeholder={FORMULARIO_CAMPOS_EDITAR_CONTATO[1].placeHolder}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {FORMULARIO_CAMPOS_EDITAR_CONTATO[1].icon}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{
              width: '50vw',
              '@media (min-width:900px)': {
                width: '35vw',
              },
            }}
            {...register('telefone', {
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setValue('telefone', MaskUtils.maskTelefone(event.target.value))
              },
            })}
            id="input-telefone"
            variant="standard"
            error={errors.telefone !== undefined}
            helperText={
              errors.telefone !== undefined
                ? errors.telefone.message
                : FORMULARIO_CAMPOS_EDITAR_CONTATO[2].textHelper
            }
            label={FORMULARIO_CAMPOS_EDITAR_CONTATO[2].label}
            placeholder={FORMULARIO_CAMPOS_EDITAR_CONTATO[2].placeHolder}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {FORMULARIO_CAMPOS_EDITAR_CONTATO[2].icon}
                </InputAdornment>
              ),
            }}
          />
          <Stack direction={'row'}>
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              sx={{
                width: '17vw',

                '@media (min-width:900px)': {
                  width: '12vw',
                },
                '@media (min-width:1100px)': {
                  width: '9vw',
                },
                marginTop: '3vh',
                mb: '2vh',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
                '&:hover': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#005bc9' : '#757575',
                },
              }}
              variant="contained"
            >
              Atualizar
            </Button>
            <Box
              sx={{
                ml: '3vh',
                display: isSubmitting ? 'flex' : 'none',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}
