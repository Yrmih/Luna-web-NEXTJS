// Third party
import {
  Box,
  CardHeader,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

// Internal
import { MediaCard } from "../components/MediaCard";

import PreAgendamento from "../components/PreAgendamento";
import { CardDocumentoEnvio } from "../components/CardDocumentoEnvio";
import { CardAvatar } from "../components/CardAvatar";
import { CardeProcesso } from "../components/CardProcesso";



export function HistoricoAssistido() {
  return (
    <Box
      flexDirection={"column"}
      display={"flex"}
      flexWrap={"wrap"}
      mt={3}
      px={2}
    >
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        display={"flex"}
        justifyContent={'center'}
        alignItems={'flex-start'}
        flexWrap={"wrap"}
      >
        <Grid
          item
          flexDirection={"column"}
          flexWrap={"wrap"}
          xs={12}
          sm={12}
          lg={8}
          rowGap={3}
          sx={{ display: 'flex' }}

        >
          <Grid item lg={12}>
            <PreAgendamento />
          </Grid>
          <Grid item lg={12}>
            <CardDocumentoEnvio />
          </Grid>
        </Grid>
        <Grid
          item
          flexDirection={"column"}
          flexWrap={"wrap"}
          sx={{ display: 'flex' }}
        rowGap={3}
          lg={4}
          xs={12}
          sm={12}
        >
          <Grid item
            xs={12}
            >
            <CardAvatar />
          </Grid>
          <Grid
            xs={12}
          >
            <CardeProcesso />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
