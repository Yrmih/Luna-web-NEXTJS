import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import GiteIcon from '@mui/icons-material/Gite';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import InputAdornment from '@mui/material/InputAdornment';


const TEXT_FIELDS_CONTATOS = [
  {
    name: "tipoArea",
    label: "Tipo Área",
    textHelper: "Ex.: Urbana, Rural, etc...",
    icon: undefined,
    required: true,
  },
  {
    name: "logradouro",
    label: "Logradouro",
    textHelper: "Ex.: Rua, Avenida, Residêncial,etc...",
    icon: <GiteIcon />,
    required: true,
  },
  {
    name: "cep",
    label: "CEP",
    textHelper: "CEP da sua moradia.",
    icon: undefined,
    required: true,
  },
  {
    name: "bairro",
    label: "Bairro",
    textHelper: "Bairro da sua residência.",
    icon: <EditRoadIcon />,
    required: true,
  },
  {
    name: "numero",
    label: "Número",
    textHelper: "Número da sua residência.",
    icon: "Nº",
    required: true,
  },
  {
    name: "complemento",
    label: "Complemento",
    textHelper: "Ex.: Casa, Apartamento, fundos, etc...",
    icon: undefined,
    required: true,
  },
  {
    name: "estado",
    label: "Estado",
    textHelper: "Estado onde mora.",
    icon: undefined,
    required: true,
  },
  {
    name: "municipio",
    label: "Município",
    textHelper: "Município de sua residência.",
    icon: undefined,
    required: true,
  },
]

export default function Endereco() {
  return (
    <Grid 
      container 
      spacing={3} 
      px={4}
      >
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          id="tipoArea"
          autoComplete="tipo-area"
          name={TEXT_FIELDS_CONTATOS[0].name}
          label={TEXT_FIELDS_CONTATOS[0].label}
          required={TEXT_FIELDS_CONTATOS[0].required}
          InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                {TEXT_FIELDS_CONTATOS[0].icon}
              </InputAdornment>,
          }}
          helperText={TEXT_FIELDS_CONTATOS[0].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          id="logradouro"
          autoComplete="logradouro"
          InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                {TEXT_FIELDS_CONTATOS[1].icon}
              </InputAdornment>,
          }}
          name={TEXT_FIELDS_CONTATOS[1].name}
          label={TEXT_FIELDS_CONTATOS[1].label}
          required={TEXT_FIELDS_CONTATOS[1].required}
          helperText={TEXT_FIELDS_CONTATOS[1].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="cep"
          fullWidth
          autoComplete="cep"
          InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                {TEXT_FIELDS_CONTATOS[2].icon}
              </InputAdornment>,
          }}
          placeholder="00000-000"
          name={TEXT_FIELDS_CONTATOS[2].name}
          label={TEXT_FIELDS_CONTATOS[2].label}
          required={TEXT_FIELDS_CONTATOS[2].required}
          helperText={TEXT_FIELDS_CONTATOS[2].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="bairro"
          fullWidth
          autoComplete="bairro"
          InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                {TEXT_FIELDS_CONTATOS[3].icon}
              </InputAdornment>,
          }}
          name={TEXT_FIELDS_CONTATOS[3].name}
          label={TEXT_FIELDS_CONTATOS[3].label}
          required={TEXT_FIELDS_CONTATOS[3].required}
          helperText={TEXT_FIELDS_CONTATOS[3].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="numero"
          fullWidth
          autoComplete="numero"
          InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                {TEXT_FIELDS_CONTATOS[4].icon}
              </InputAdornment>,
          }}
          name={TEXT_FIELDS_CONTATOS[4].name}
          label={TEXT_FIELDS_CONTATOS[4].label}
          required={TEXT_FIELDS_CONTATOS[4].required}
          helperText={TEXT_FIELDS_CONTATOS[4].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="complemento"
          fullWidth
          autoComplete="complemento"
          InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                {TEXT_FIELDS_CONTATOS[5].icon}
              </InputAdornment>,
          }}
          name={TEXT_FIELDS_CONTATOS[5].name}
          label={TEXT_FIELDS_CONTATOS[5].label}
          required={TEXT_FIELDS_CONTATOS[5].required}
          helperText={TEXT_FIELDS_CONTATOS[5].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="estado"
          fullWidth
          autoComplete="estado"
          InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                {TEXT_FIELDS_CONTATOS[6].icon}
              </InputAdornment>,
          }}
          name={TEXT_FIELDS_CONTATOS[6].name}
          label={TEXT_FIELDS_CONTATOS[6].label}
          required={TEXT_FIELDS_CONTATOS[6].required}
          helperText={TEXT_FIELDS_CONTATOS[6].textHelper}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="municipio"         
          fullWidth
          autoComplete="municipio"
          InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                {TEXT_FIELDS_CONTATOS[7].icon}
              </InputAdornment>,
          }}
          name={TEXT_FIELDS_CONTATOS[7].name}
          label={TEXT_FIELDS_CONTATOS[7].label}
          required={TEXT_FIELDS_CONTATOS[7].required}
          helperText={TEXT_FIELDS_CONTATOS[7].textHelper}
        />
      </Grid>
    </Grid>
  );
}