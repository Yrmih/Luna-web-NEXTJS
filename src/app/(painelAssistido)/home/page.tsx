import MediaCard from '@/components/MediaCard';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Olá 👋</AlertTitle>
          Esse é área de histórioco de solicitações de agendamentos.
        </Alert>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={6}>
            <MediaCard
              heading="Qualificação 1"
              text="Relatos do assistido sobre a cause que deseja solicitar assistência da defensoria."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Qualificação 2"
              text="Relatos do assistido sobre a cause que deseja solicitar assistência da defensoria."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Qualificação 3"
              text="Relatos do assistido sobre a cause que deseja solicitar assistência da defensoria."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Qualificação 4"
              text="Relatos do assistido sobre a cause que deseja solicitar assistência da defensoria."
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}