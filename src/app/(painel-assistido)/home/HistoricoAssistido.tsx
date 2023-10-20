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
import CardDocumentoEnvio from "../components/CardDocumentoEnvio";
import PreAgendamento from "../components/PreAgendamento";
import CardAvatar from "../components/CardAvatar";


export function HistoricoAssistido() {
  return (
    <Box
      flexDirection={"column"}
      display={"flex"}
      flexWrap={"wrap"}
      mt={-3}
      px={2}>
      {/* <Grid container p={0}>
        <CardHeader
          title={"Atendimento"}
          subheader={'numero do atendimento'}
          component={Paper}
          sx={{ width: "100%", height: "10.125rem" }}
        />
      </Grid> */}
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        display={"flex"}
        flexWrap={"wrap"}
      >
        <Grid
          flexDirection={"column"}
          flexWrap={"wrap"}
          component={Stack}
          lg={8}
          rowGap={3}
          item
          spacing={2}
        >
          <Box>
            <PreAgendamento />
          </Box>
          <Box>
            <CardDocumentoEnvio />
          </Box>
        </Grid>
        <Grid item lg={4}>
          <CardAvatar />
        </Grid>
      </Grid>
    </Box>
  );
}
