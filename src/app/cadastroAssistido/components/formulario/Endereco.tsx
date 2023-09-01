import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Endereco() {
  return (
    <Grid 
      container 
      spacing={3} 
      px={4}
      >
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="tipoArea"
          name="tipoArea"
          label="Tipo Área"
          fullWidth
          autoComplete="given-name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="logradouro"
          name="logradouro"
          label="Logradouro"
          fullWidth
          autoComplete="logradouro"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="cep"
          name="cep"
          label="CEP"
          fullWidth
          autoComplete="cep"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="bairro"
          name="bairro"
          label="Bairro"
          fullWidth
          autoComplete="bairro"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="numero"
          name="numero"
          label="Número"
          fullWidth
          autoComplete="numero"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="complemento"
          name="complemento"
          label="Complemento"
          fullWidth
          autoComplete="complemento"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="estado"
          name="estado"
          label="Estado"
          fullWidth
          autoComplete="estado"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="municipio"
          name="municipio"
          label="Município"
          fullWidth
          autoComplete="municipio"
        />
      </Grid>
    </Grid>
  );
}