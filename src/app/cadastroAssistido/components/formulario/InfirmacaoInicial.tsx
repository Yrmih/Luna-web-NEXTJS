import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import { ChangeEvent } from 'react';
import InputAdornment from '@mui/material/InputAdornment';


const TEXT_FIELD_INFO_INICIAL = [
  {
    name: "nomeCompleto",
    label: "Nome Completo",
    textHelper: "nome e sobrenomes. Ex.: Luiza de Suza Menezes",
    icon: <PersonIcon/>,
    required: true,
  },
  {
    name: "cpf",
    label: "CPF",
    textHelper: "Número de CPF ou CNPJ",
    icon: <BadgeIcon/>,
    required: true,
  },
  {
    name: "email",
    label: "Endereço de Email",
    textHelper: "O email é inportante para envio de informações.",
    icon: <MailOutlineIcon />,
    required: true,
  },
]

export default function InformacaoInicial() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget)
    console.log(event.target)
  };

  return (
      <Grid 
        container
        flexDirection={'column'} 
        px={4}
        spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="nomeCompleto"
            fullWidth
            autoComplete="cc-name"
            InputProps={{
              startAdornment: 
                <InputAdornment position="start">
                  {TEXT_FIELD_INFO_INICIAL[0].icon}
                </InputAdornment>,
            }}
            onChange={handleChange}
            name={TEXT_FIELD_INFO_INICIAL[0].name}
            label={TEXT_FIELD_INFO_INICIAL[0].label}
            helperText={TEXT_FIELD_INFO_INICIAL[0].textHelper}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="cpf"
            autoComplete="cc-number"
            InputProps={{
              startAdornment: 
              <InputAdornment position="start">
                  {TEXT_FIELD_INFO_INICIAL[1].icon}
                </InputAdornment>,
            }}
            onChange={handleChange}
            placeholder="000.000.000-00"
            name={TEXT_FIELD_INFO_INICIAL[1].name}
            label={TEXT_FIELD_INFO_INICIAL[1].label}
            required={TEXT_FIELD_INFO_INICIAL[1].required}
            helperText={TEXT_FIELD_INFO_INICIAL[1].textHelper}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            InputProps={{
              startAdornment: 
              <InputAdornment position="start">
                  {TEXT_FIELD_INFO_INICIAL[2].icon}
                </InputAdornment>,
            }}
            onChange={handleChange}
            fullWidth
            autoComplete="cc-exp"
            name={TEXT_FIELD_INFO_INICIAL[2].name}
            label={TEXT_FIELD_INFO_INICIAL[2].label}
            required={TEXT_FIELD_INFO_INICIAL[2].required}
            helperText={TEXT_FIELD_INFO_INICIAL[2].textHelper}
          />
        </Grid>
      </Grid>
  );
}