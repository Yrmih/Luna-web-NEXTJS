// Third party
import GiteIcon from '@mui/icons-material/Gite'
import EditRoadIcon from '@mui/icons-material/EditRoad'
import { Grid, InputAdornment, TextField } from '@mui/material'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { CadastroAssistidoInputsForm } from '../../CadastroAssistido'

const FOMULARIO_CAMPOS_ENDERECO = [
  {
    name: 'tipoArea',
    label: 'Tipo Área',
    textHelper: 'Ex.: Urbana, Rural, etc...',
    placeHolder: '',
    icon: undefined,
    required: true,
  },
  {
    name: 'logradouro',
    label: 'Logradouro',
    textHelper: 'Ex.: Rua, Avenida, Residêncial,etc...',
    placeHolder: '',
    icon: <GiteIcon />,
    required: true,
  },
  {
    name: 'cep',
    label: 'CEP',
    textHelper: 'CEP da sua moradia.',
    placeHolder: '00000-000',
    icon: undefined,
    required: true,
  },
  {
    name: 'bairro',
    label: 'Bairro',
    textHelper: 'Bairro da sua residência.',
    placeHolder: '',
    icon: <EditRoadIcon />,
    required: true,
  },
  {
    name: 'numero',
    label: 'Número',
    textHelper: 'Número da sua residência.',
    placeHolder: 'Ex.: 34, 67B, 3456, etc..',
    icon: 'Nº',
    required: true,
  },
  {
    name: 'complemento',
    label: 'Complemento',
    textHelper: 'Ex.: Casa, Apartamento, fundos, etc...',
    placeHolder: '',
    icon: undefined,
    required: true,
  },
  {
    name: 'estado',
    label: 'Estado',
    textHelper: 'Estado onde mora.',
    placeHolder: 'Pará, Espirito Santo, Paraná, etc..',
    icon: undefined,
    required: true,
  },
  {
    name: 'municipio',
    label: 'Município',
    textHelper: 'Município de sua residência.',
    placeHolder: '',
    icon: undefined,
    required: true,
  },
]

export type EnderecoProps = {
  register: UseFormRegister<CadastroAssistidoInputsForm>
  errors: FieldErrors<CadastroAssistidoInputsForm>
}

export function EnderecoForm({ register, errors }: EnderecoProps) {
  return (
    <Grid container spacing={3} px={4}>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          id="tipoArea"
          autoComplete="tipo-area"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FOMULARIO_CAMPOS_ENDERECO[0].icon}
              </InputAdornment>
            ),
          }}
          {...register('endereco.tipoArea')}
          name={FOMULARIO_CAMPOS_ENDERECO[0].name}
          label={FOMULARIO_CAMPOS_ENDERECO[0].label}
          required={FOMULARIO_CAMPOS_ENDERECO[0].required}
          helperText={FOMULARIO_CAMPOS_ENDERECO[0].textHelper}
          placeholder={FOMULARIO_CAMPOS_ENDERECO[0].placeHolder}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          id="logradouro"
          autoComplete="logradouro"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FOMULARIO_CAMPOS_ENDERECO[1].icon}
              </InputAdornment>
            ),
          }}
          {...register('endereco.logradouro')}
          name={FOMULARIO_CAMPOS_ENDERECO[1].name}
          label={FOMULARIO_CAMPOS_ENDERECO[1].label}
          required={FOMULARIO_CAMPOS_ENDERECO[1].required}
          helperText={FOMULARIO_CAMPOS_ENDERECO[1].textHelper}
          placeholder={FOMULARIO_CAMPOS_ENDERECO[1].placeHolder}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="cep"
          fullWidth
          autoComplete="cep"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FOMULARIO_CAMPOS_ENDERECO[2].icon}
              </InputAdornment>
            ),
          }}
          {...register('endereco.cep')}
          name={FOMULARIO_CAMPOS_ENDERECO[2].name}
          label={FOMULARIO_CAMPOS_ENDERECO[2].label}
          required={FOMULARIO_CAMPOS_ENDERECO[2].required}
          helperText={FOMULARIO_CAMPOS_ENDERECO[2].textHelper}
          placeholder={FOMULARIO_CAMPOS_ENDERECO[2].placeHolder}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          id="bairro"
          autoComplete="bairro"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FOMULARIO_CAMPOS_ENDERECO[3].icon}
              </InputAdornment>
            ),
          }}
          {...register('endereco.bairro')}
          name={FOMULARIO_CAMPOS_ENDERECO[3].name}
          label={FOMULARIO_CAMPOS_ENDERECO[3].label}
          required={FOMULARIO_CAMPOS_ENDERECO[3].required}
          helperText={FOMULARIO_CAMPOS_ENDERECO[3].textHelper}
          placeholder={FOMULARIO_CAMPOS_ENDERECO[3].placeHolder}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          id="numero"
          autoComplete="numero"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FOMULARIO_CAMPOS_ENDERECO[4].icon}
              </InputAdornment>
            ),
          }}
          {...register('endereco.numero')}
          name={FOMULARIO_CAMPOS_ENDERECO[4].name}
          label={FOMULARIO_CAMPOS_ENDERECO[4].label}
          required={FOMULARIO_CAMPOS_ENDERECO[4].required}
          helperText={FOMULARIO_CAMPOS_ENDERECO[4].textHelper}
          placeholder={FOMULARIO_CAMPOS_ENDERECO[4].placeHolder}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          id="complemento"
          autoComplete="complemento"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FOMULARIO_CAMPOS_ENDERECO[5].icon}
              </InputAdornment>
            ),
          }}
          {...register('endereco.complemento')}
          name={FOMULARIO_CAMPOS_ENDERECO[5].name}
          label={FOMULARIO_CAMPOS_ENDERECO[5].label}
          required={FOMULARIO_CAMPOS_ENDERECO[5].required}
          helperText={FOMULARIO_CAMPOS_ENDERECO[5].textHelper}
          placeholder={FOMULARIO_CAMPOS_ENDERECO[5].placeHolder}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          id="estado"
          autoComplete="estado"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FOMULARIO_CAMPOS_ENDERECO[6].icon}
              </InputAdornment>
            ),
          }}
          {...register('endereco.estado')}
          name={FOMULARIO_CAMPOS_ENDERECO[6].name}
          label={FOMULARIO_CAMPOS_ENDERECO[6].label}
          required={FOMULARIO_CAMPOS_ENDERECO[6].required}
          helperText={FOMULARIO_CAMPOS_ENDERECO[6].textHelper}
          placeholder={FOMULARIO_CAMPOS_ENDERECO[6].placeHolder}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          id="municipio"
          autoComplete="municipio"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {FOMULARIO_CAMPOS_ENDERECO[7].icon}
              </InputAdornment>
            ),
          }}
          {...register('endereco.municipio')}
          name={FOMULARIO_CAMPOS_ENDERECO[7].name}
          label={FOMULARIO_CAMPOS_ENDERECO[7].label}
          required={FOMULARIO_CAMPOS_ENDERECO[7].required}
          helperText={FOMULARIO_CAMPOS_ENDERECO[7].textHelper}
          placeholder={FOMULARIO_CAMPOS_ENDERECO[7].placeHolder}
        />
      </Grid>
    </Grid>
  )
}
