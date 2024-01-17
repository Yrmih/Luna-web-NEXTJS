// Third party
import { Box, CardHeader, Paper } from '@mui/material'

// Internal
import { DetalhesAtendimento } from '../components/page'

export default function DetalhesAtendimentoPage({
  params: { numero },
}: {
  params: { numero: string }
}) {
  return (
    <>
      <Box
        sx={{
          p: 0,
          m: 0,
        }}
      >
        <Paper sx={{ p: 0, m: 0 }}>
          <CardHeader
            title={'Atendimento'}
            subheader={numero}
            sx={{ width: '100%', height: '10.125rem' }}
          />
        </Paper>
      </Box>
      <DetalhesAtendimento />
    </>
  )
}
