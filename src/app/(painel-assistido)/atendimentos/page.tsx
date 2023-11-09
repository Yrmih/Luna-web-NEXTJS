'use client'
import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'

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
              boxShadow: '1',
              borderRadius: '3vh',
              marginTop: '-8vh',
              marginBottom: '4vh',
              width: '95%',
            }}
          >
            <Box sx={{ width: '75vw', height: '7vh' }} bgcolor={'white'}></Box>
            {/* <Box
              sx={{ width: '75vw', height: '2px' }}
              bgcolor={'lightgrey'}
            ></Box> */}
            <Divider></Divider>
            <Stack
              sx={{
                marginBottom: '2vh',
                padding: '2vh',
                width: '75vw',
              }}
              bgcolor={'white'}
            >
              <Typography marginBottom="2vh" variant="h6">
                PRÉ AGENDAMENTOS
              </Typography>
              <Typography color={'grey'}>
                Uma equipe especializada da Defensoria Pública está analisando o
                seu caso. Assim que o seu agendamento for confirmado, você
                receberá uma notificação.
              </Typography>
            </Stack>
            <Stack direction={matches ? 'row' : 'column'} spacing={8}>
              <Box
                sx={{
                  width: '70vw',
                  height: '90vw',
                  '@media (min-width:900px)': {
                    width: '30vw',
                    height: '45vh',
                  },
                }}
                bgcolor={'red'}
              ></Box>
              <Box
                sx={{
                  width: '70vw',
                  height: '90vw',
                  '@media (min-width:900px)': {
                    width: '30vw',
                    height: '45vh',
                  },
                }}
                bgcolor={'red'}
              ></Box>
            </Stack>
            <Divider variant="middle" />
            <Stack
              sx={{
                marginBottom: '2vh',
                padding: '2vh',
                width: '75vw',
              }}
              bgcolor={'white'}
            >
              <Typography marginBottom="2vh" variant="h6">
                PRÉ AGENDAMENTOS
              </Typography>
              <Typography color={'grey'}>
                Uma equipe especializada da Defensoria Pública está analisando o
                seu caso. Assim que o seu agendamento for confirmado, você
                receberá uma notificação.
              </Typography>
            </Stack>
            <Stack direction={matches ? 'row' : 'column'} spacing={8}>
              <Box
                sx={{
                  width: '70vw',
                  height: '90vw',
                  '@media (min-width:900px)': {
                    width: '30vw',
                    height: '45vh',
                  },
                }}
                bgcolor={'red'}
              ></Box>
              <Box
                sx={{
                  width: '70vw',
                  height: '90vw',
                  '@media (min-width:900px)': {
                    width: '30vw',
                    height: '45vh',
                  },
                }}
                bgcolor={'red'}
              ></Box>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </>
  )
}
