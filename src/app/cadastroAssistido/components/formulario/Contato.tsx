import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Contato() {
  return (
      <Grid 
        container 
        spacing={3}
        px={4}
        >
        <Grid item xs={12}>
          <TextField
            required
            id="celular"
            label="Número de Celular"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="telefone"
            label="Número de Telefone"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
  );
}