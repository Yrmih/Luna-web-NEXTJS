// Internal
import { Box, CardHeader, Paper } from "@mui/material";
import { HistoricoAssistido } from "./HistoricoAssistido";

export default function HomePage() {
  return (
    <>
      <Box sx={{
        p: 0,
        m: 0,
      }}>
        <Paper sx={{ p: 0, m: 0 }}>
          <CardHeader
            title={"Atendimento"}
            subheader={"numero do atendimento"}
            component={Paper}
            sx={{ width: "100%", height: "10.125rem" }}
          />
        </Paper>
      </Box>
      <HistoricoAssistido />
    </>
  );
}
