// Third party
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Grid, InputAdornment, TextField } from '@mui/material'
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'

// Internal
import { MaskUtils } from '@/utils/MaskUtils'
import { CadastroAssistidoInputsForm } from '../ui/CadastroAssistido'
import { ChangeEvent } from 'react'

const FORMULARIO_CAMPOS_CONTATOS = [
  {
    label: 'Número de Celular',
    textHelper: 'Número de Calular com o DDD.',
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

export type ContatoProps = {
  register: UseFormRegister<CadastroAssistidoInputsForm>
  watch: UseFormWatch<CadastroAssistidoInputsForm>
  setValue: UseFormSetValue<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
}

export function ContatoForm({ register, setValue, errors }: ContatoProps) {
  return (
    <Grid container spacing={3} px={4}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="celular"
          autoComplete="cc-name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_CAMPOS_CONTATOS[0].icon}
              </InputAdornment>
            ),
          }}
          {...register('contatos.celular', {
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              setValue(
                'contatos.celular',
                MaskUtils.maskCelular(event.target.value),
              )
            },
          })}
          error={errors.contatos?.celular !== undefined}
          helperText={
            errors.contatos?.celular !== undefined
              ? errors.contatos.celular.message
              : FORMULARIO_CAMPOS_CONTATOS[0].textHelper
          }
          label={FORMULARIO_CAMPOS_CONTATOS[0].label}
          placeholder={FORMULARIO_CAMPOS_CONTATOS[0].placeHolder}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="telefone"
          fullWidth
          autoComplete="cc-number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_CAMPOS_CONTATOS[1].icon}
              </InputAdornment>
            ),
          }}
          {...register('contatos.telefone', {
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              setValue(
                'contatos.telefone',
                MaskUtils.maskTelefone(event.target.value),
              )
            },
          })}
          error={errors.contatos?.telefone !== undefined}
          helperText={
            errors.contatos?.telefone !== undefined
              ? errors.contatos.telefone.message
              : FORMULARIO_CAMPOS_CONTATOS[0].textHelper
          }
          placeholder={FORMULARIO_CAMPOS_CONTATOS[1].placeHolder}
          label={FORMULARIO_CAMPOS_CONTATOS[1].label}
        />
      </Grid>
    </Grid>
  )
}
