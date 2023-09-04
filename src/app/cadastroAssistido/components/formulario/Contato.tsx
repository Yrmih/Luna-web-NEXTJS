import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

const TEXT_FIELDS_CONTATOS = [
  {
    name: "celular",
    label: "Número de Celular",
    textHelper: "Número de Calular com o DDD.",
    icon: <WhatsAppIcon/>,
    required: true,
  },
  {
    name: "telefone",
    label: "Número de Telefone",
    textHelper: "Número de telefone fixo.",
    icon: <LocalPhoneIcon/>,
    required: false
  },
]


export default function Contato() {
  const handleChange = (event: ChangeEvent<HTMLElement>) => {
    console.log()
  }

  return (
      <Grid 
        container 
        spacing={3}
        px={4}
        >
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="celular"
            autoComplete="cc-name"
            InputProps={{
              startAdornment: 
                <InputAdornment position="start">
                  {TEXT_FIELDS_CONTATOS[0].icon}
                </InputAdornment>,
            }}
            onChange={handleChange}
            placeholder="(99) 99999-9999"
            name={TEXT_FIELDS_CONTATOS[0].name}
            label={TEXT_FIELDS_CONTATOS[0].label}
            required={TEXT_FIELDS_CONTATOS[0].required}
            helperText={TEXT_FIELDS_CONTATOS[0].textHelper}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="telefone"
            fullWidth
            autoComplete="cc-number"
            InputProps={{
              startAdornment: 
                <InputAdornment position="start">
                  {TEXT_FIELDS_CONTATOS[1].icon}
                </InputAdornment>,
            }}
            onChange={handleChange}
            placeholder="(99) 9999-9999"
            name={TEXT_FIELDS_CONTATOS[1].name}
            label={TEXT_FIELDS_CONTATOS[1].label}
            required={TEXT_FIELDS_CONTATOS[1].required}
            helperText={TEXT_FIELDS_CONTATOS[1].textHelper}
          />
        </Grid>
      </Grid>
  );
}