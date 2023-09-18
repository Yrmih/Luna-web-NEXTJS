// Third party
import BadgeIcon from '@mui/icons-material/Badge'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonIcon from '@mui/icons-material/Person'
import { Grid, InputAdornment, TextField } from '@mui/material'

const FORMULARIO_CAMPOS_INFO_INICIAL = [
  {
    name: 'nomeCompleto',
    label: 'Nome Completo',
    textHelper: 'nome e sobrenomes.',
    placeHolder: 'Ex.: Luiza de Suza Menezes',
    icon: <PersonIcon />,
    required: true,
  },
  {
    name: 'cpf',
    label: 'CPF',
    textHelper: 'Número de CPF ou CNPJ',
    placeHolder: '000.000.000-00',
    icon: <BadgeIcon />,
    required: true,
  },
  {
    name: 'email',
    label: 'Endereço de Email',
    textHelper: 'O email é inportante para envio de informações.',
    placeHolder: 'EX.: alfser@gmail.com',
    icon: <MailOutlineIcon />,
    required: true,
  },
]

export function InformacaoInicial() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget)
    console.log(event.target)
  }

  return (
    <Grid container flexDirection={'column'} px={4} spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
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
          onChange={handleChange}
          name={FORMULARIO_CAMPOS_INFO_INICIAL[0].name}
          label={FORMULARIO_CAMPOS_INFO_INICIAL[0].label}
          helperText={FORMULARIO_CAMPOS_INFO_INICIAL[0].textHelper}
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
          onChange={handleChange}
          name={FORMULARIO_CAMPOS_INFO_INICIAL[1].name}
          label={FORMULARIO_CAMPOS_INFO_INICIAL[1].label}
          required={FORMULARIO_CAMPOS_INFO_INICIAL[1].required}
          helperText={FORMULARIO_CAMPOS_INFO_INICIAL[1].textHelper}
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
          onChange={handleChange}
          fullWidth
          autoComplete="cc-exp"
          name={FORMULARIO_CAMPOS_INFO_INICIAL[2].name}
          label={FORMULARIO_CAMPOS_INFO_INICIAL[2].label}
          required={FORMULARIO_CAMPOS_INFO_INICIAL[2].required}
          helperText={FORMULARIO_CAMPOS_INFO_INICIAL[2].textHelper}
          placeholder={FORMULARIO_CAMPOS_INFO_INICIAL[2].placeHolder}
        />
      </Grid>
    </Grid>
  )
}
