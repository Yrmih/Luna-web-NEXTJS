// Third party
import BadgeIcon from '@mui/icons-material/Badge'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonIcon from '@mui/icons-material/Person'
import { Grid, InputAdornment, TextField } from '@mui/material'
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import { CadastroAssistidoInputsForm } from '../../CadastroAssistido'
import { useEffect } from 'react'

export const normalizeCpfCnpj = (value: string | undefined) => {
  if (!value) return ''

  const cleanedValue = value.replace(/\D/g, '')

  if (cleanedValue.length <= 11) {
    return cleanedValue
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    return cleanedValue
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})(\d+?)/, '$1')
  }
}

const FORMULARIO_CAMPOS_INFO_INICIAL = [
  {
    label: 'Nome Completo',
    textHelper: 'nome e sobrenomes.',
    placeHolder: 'Ex.: Luiza de Suza Menezes',
    icon: <PersonIcon />,
  },
  {
    label: 'CPF',
    textHelper: 'Número de CPF ou CNPJ',
    placeHolder: '000.000.000-00',
    icon: <BadgeIcon />,
  },
  {
    label: 'Endereço de Email',
    textHelper: 'O email é importante para envio de informações ao assistido.',
    placeHolder: 'Ex.: alfser@gmail.com',
    icon: <MailOutlineIcon />,
  },
]

export type InformacaoInicialProps = {
  register: UseFormRegister<CadastroAssistidoInputsForm>
  watch: UseFormWatch<CadastroAssistidoInputsForm>
  setValue: UseFormSetValue<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
}

export function InformacaoInicialForm({
  register,
  setValue,
  watch,
  errors,
}: InformacaoInicialProps) {
  const cpfValue = watch('informacaoInicial.cpf')

  useEffect(() => {
    setValue('informacaoInicial.cpf', normalizeCpfCnpj(cpfValue))
  }, [cpfValue, setValue])

  return (
    <Grid container flexDirection={'column'} px={4} spacing={3}>
      <Grid item xs={12}>
        <TextField
          id="nomeCompleto"
          fullWidth
          autoComplete="cc-name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_CAMPOS_INFO_INICIAL[0].icon}
              </InputAdornment>
            ),
          }}
          {...register('informacaoInicial.nomeCompleto')}
          helperText={
            errors.informacaoInicial?.nomeCompleto !== undefined
              ? errors.informacaoInicial.nomeCompleto?.message
              : FORMULARIO_CAMPOS_INFO_INICIAL[0].textHelper
          }
          error={errors.informacaoInicial?.nomeCompleto !== undefined}
          label={FORMULARIO_CAMPOS_INFO_INICIAL[0].label}
          placeholder={FORMULARIO_CAMPOS_INFO_INICIAL[0].placeHolder}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="cpf"
          autoComplete="cc-number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_CAMPOS_INFO_INICIAL[1].icon}
              </InputAdornment>
            ),
          }}
          {...register('informacaoInicial.cpf', {
            required: 'Campo Obrigatório',
          })}
          helperText={
            errors.informacaoInicial !== undefined
              ? errors.informacaoInicial.cpf?.message
              : FORMULARIO_CAMPOS_INFO_INICIAL[1].textHelper
          }
          error={errors.informacaoInicial?.cpf !== undefined}
          label={FORMULARIO_CAMPOS_INFO_INICIAL[1].label}
          placeholder={FORMULARIO_CAMPOS_INFO_INICIAL[1].placeHolder}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FORMULARIO_CAMPOS_INFO_INICIAL[2].icon}
              </InputAdornment>
            ),
          }}
          fullWidth
          autoComplete="email"
          {...register('informacaoInicial.email')}
          helperText={
            errors.informacaoInicial?.email !== undefined
              ? errors.informacaoInicial.email?.message
              : FORMULARIO_CAMPOS_INFO_INICIAL[2].textHelper
          }
          error={errors.informacaoInicial?.email !== undefined}
          label={FORMULARIO_CAMPOS_INFO_INICIAL[2].label}
          placeholder={FORMULARIO_CAMPOS_INFO_INICIAL[2].placeHolder}
        />
      </Grid>
    </Grid>
  )
}
