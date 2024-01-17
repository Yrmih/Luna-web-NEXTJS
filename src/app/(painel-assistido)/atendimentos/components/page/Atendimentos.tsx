'use client'

// Third party
import { Box, Card, Paper, Stack, Typography, useTheme } from '@mui/material'

// Internal
import { ContainerAtendimento } from '../ui/ContainerAtendimento'

export function Atendimentos() {
  const theme = useTheme()

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
          <Box
            fontWeight={600}
            sx={{
              backgroundColor: theme.palette.primary.main,
              paddingTop: '8vh',
              paddingLeft: '5vh',
              width: '100%',
              height: '25vh',
              marginBottom: -8,
            }}
          >
            <Typography color={'white'} variant="h3">
              Meus Atendimentos
            </Typography>
          </Box>
          <Stack
            direction={'column'}
            component={Card}
            sx={{
              padding: '2vh',
              paddingBottom: '10vh',
              alignItems: 'center',
              boxShadow: 2,
              borderRadius: '3vh',
              marginBottom: '4vh',
              width: '95%',
            }}
          >
            <ContainerAtendimento props={{ tipoAtendimento: 'pre' }} />
            <ContainerAtendimento props={{ tipoAtendimento: 'atendimento' }} />
            <ContainerAtendimento props={{ tipoAtendimento: 'agendamento' }} />
          </Stack>
        </Paper>
      </Box>
    </>
  )
}
