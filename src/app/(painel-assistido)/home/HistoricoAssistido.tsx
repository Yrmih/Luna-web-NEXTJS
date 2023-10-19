// Third party
import {
  Box,
  CardHeader,
  Grid,
  Paper,
} from "@mui/material";

// Internal
import { MediaCard } from "../components/MediaCard";
import CardDocumentoEnvio from "../components/CardDocumentoEnvio";
import PreAgendamento from "../components/PreAgendamento";


export function HistoricoAssistido() {
  return (
    <Box
      flexDirection={"column"}
      display={"flex"}
      flexWrap={"wrap"}
    >
      <Grid container pb={3}>
        <CardHeader
          title={"Atendimento"}
          subheader={'numero do atendimento'}
          component={Paper}
          sx={{ width: "100%", height: "10.125rem" }}
        />
      </Grid>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        flexDirection={"column"}
        display={"flex"}
        flexWrap={"wrap"}
      >
        <Grid item lg={8}>
          <PreAgendamento />
        </Grid>
        <Grid item lg={8}>
          <CardDocumentoEnvio />
        </Grid>
      </Grid>
    </Box>
  );
}
