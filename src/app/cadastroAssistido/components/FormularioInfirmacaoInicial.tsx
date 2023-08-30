import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function FormularioInformacaoInicial() {
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
            label="Nome Completo"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cpf"
            label="CPF"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            label="Endereço de Email"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
      </Grid>
  );
}