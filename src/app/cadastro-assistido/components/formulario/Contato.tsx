// Third party
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Grid, InputAdornment, TextField } from '@mui/material'

const FORMULARIO_CAMPOS_CONTATOS = [
  {
    name: 'celular',
    label: 'Número de Celular',
    textHelper: 'Número de Calular com o DDD.',
    placeHolder: '(99) 99999-9999',
    icon: <WhatsAppIcon />,
    required: true,
  },
  {
    name: 'telefone',
    label: 'Número de Telefone',
    textHelper: 'Número de telefone fixo.',
    placeHolder: '(99) 9999-9999',
    icon: <LocalPhoneIcon />,
    required: false,
  },
]

export function Contato() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget)
    console.log(event.target)
  }

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
          onChange={handleChange}
          name={FORMULARIO_CAMPOS_CONTATOS[0].name}
          label={FORMULARIO_CAMPOS_CONTATOS[0].label}
          required={FORMULARIO_CAMPOS_CONTATOS[0].required}
          helperText={FORMULARIO_CAMPOS_CONTATOS[0].textHelper}
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
          onChange={handleChange}
          placeholder={FORMULARIO_CAMPOS_CONTATOS[1].placeHolder}
          name={FORMULARIO_CAMPOS_CONTATOS[1].name}
          label={FORMULARIO_CAMPOS_CONTATOS[1].label}
          required={FORMULARIO_CAMPOS_CONTATOS[1].required}
          helperText={FORMULARIO_CAMPOS_CONTATOS[1].textHelper}
        />
      </Grid>
    </Grid>
  )
}
