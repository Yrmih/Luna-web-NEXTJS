'use client'
import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'

import CardAtendimento from '../components/CardAtendimento'
import ContainerAtendimento from '../components/ContainerAtendimento'

export default function HomePage() {
  const matches = useMediaQuery('(min-width:900px)')
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
            bgcolor="#a7d4aa"
            color="white"
            fontWeight={600}
            fontSize={'1.5rem'}
            sx={{
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
            bgcolor={'white'}
            sx={{
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
