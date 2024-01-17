// Third party
import { Box, Paper, Stack } from '@mui/material'

// Internal
import { ContainerAtendimento } from '../ui/ContainerAtendimento'

export function Atendimentos() {
  return (
    <>
      <Box
        sx={{
          p: 0,
          m: 0,
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 0,
            m: 0,
          }}
        >
          <Box color="white" fontWeight={600} fontSize={'1.5rem'}>
            Meus Atendimentos
          </Box>
          <Stack direction={'column'}>
            <ContainerAtendimento props={{ tipoAtendimento: 'pre' }} />
            <ContainerAtendimento props={{ tipoAtendimento: 'atendimento' }} />
            <ContainerAtendimento props={{ tipoAtendimento: 'agendamento' }} />
          </Stack>
        </Paper>
      </Box>
    </>
  )
}
