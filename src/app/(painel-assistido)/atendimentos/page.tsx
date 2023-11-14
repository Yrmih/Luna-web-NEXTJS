'use client'
import { Box, Paper, Stack } from '@mui/material'

import ContainerAtendimento from '../components/ContainerAtendimento'

export default function HomePage() {
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
            color="white"
            fontWeight={600}
            fontSize={'1.5rem'}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.primary.main
                  : '#171717',
              paddingTop: '8vh',
              paddingLeft: '5vh',
              width: '100%',
              height: '25vh',
            }}
          >
            Meus Atendimentos
          </Box>
          <Stack
            direction={'column'}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? 'white' : '#1b1b1b',
              padding: '2vh',
              paddingBottom: '10vh',

              alignItems: 'center',
              boxShadow: 2,
              borderRadius: '3vh',
              marginTop: '-8vh',
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
