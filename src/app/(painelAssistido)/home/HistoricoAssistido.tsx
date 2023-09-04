import { Alert, AlertTitle, Box, Grid } from "@mui/material";
import MediaCard from "../components/MediaCard";

export default function HistoricoAssistido() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Olá 👋</AlertTitle>
          Esse é área de histórico de solicitações de agendamentos.
        </Alert>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={6}>
            <MediaCard
              heading="Pré-agendamento 1"
              text="Relatos do assistido sobre a cause que deseja solicitar assistência da defensoria."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Pré-agendamento 2"
              text="Relatos do assistido sobre a cause que deseja solicitar assistência da defensoria."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Pré-agendamento 3"
              text="Relatos do assistido sobre a cause que deseja solicitar assistência da defensoria."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Pré-agendamento 4"
              text="Relatos do assistido sobre a cause que deseja solicitar assistência da defensoria."
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}
