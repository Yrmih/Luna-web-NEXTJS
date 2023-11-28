'use client'
import { Stack, Divider, Typography, Grid, useMediaQuery } from '@mui/material'
import CardAtendimento from './CardAtendimento'

interface ContainerAtendimentoProps {
  props: {
    tipoAtendimento?: string
  }
}

export default function ContainerAtendimento({
  props,
}: ContainerAtendimentoProps) {
  const matches = useMediaQuery('(min-width:900px)')
  if (props.tipoAtendimento === 'pre')
    return (
      <>
        <Stack
          sx={{
            marginBottom: '2vh',
            marginTop: '8vh',
            padding: '2vh',
            width: '75vw',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'white'
                : theme.palette.primary.main[300],
          }}
        >
          <Divider />
          <Typography marginTop="5vh" marginBottom="2vh" variant="h6">
            PRÉ AGENDAMENTOS
          </Typography>

          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === 'light' ? 'grey' : 'white',
            }}
          >
            Uma equipe especializada da Defensoria Pública está analisando o seu
            caso. Assim que o seu agendamento for confirmado, você receberá uma
            notificação.
          </Typography>
        </Stack>
        <Grid
          display={'flex'}
          alignContent={'center'}
          justifyContent={matches ? 'left' : 'center'}
          container
          rowSpacing={{ xs: 10, sm: 10, md: 8 }}
          columns={{ sm: 1, md: 4 }}
        >
          {/*  cards status atendimento  */}

          <CardAtendimento props={{ tipoAtendimento: 'pre' }} />
        </Grid>
      </>
    )
  if (props.tipoAtendimento === 'atendimento')
    return (
      <>
        <Stack
          sx={{
            marginBottom: '2vh',
            marginTop: '8vh',
            padding: '2vh',
            width: '75vw',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'white'
                : theme.palette.primary.main[300],
          }}
        >
          <Divider />
          <Typography marginTop="5vh" marginBottom="2vh" variant="h6">
            ATENDIMENTOS
          </Typography>

          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === 'light' ? 'grey' : 'white',
            }}
          >
            Uma equipe especializada da Defensoria Pública está analisando o seu
            caso. Assim que o seu agendamento for confirmado, você receberá uma
            notificação.
          </Typography>
        </Stack>
        <Grid
          display={'flex'}
          alignContent={'center'}
          justifyContent={matches ? 'left' : 'center'}
          container
          rowSpacing={{ xs: 10, sm: 10, md: 8 }}
          columns={{ sm: 1, md: 4 }}
        >
          {/*  cards status atendimento  */}

          <CardAtendimento props={{ tipoAtendimento: 'atendimento' }} />
        </Grid>
      </>
    )
  if (props.tipoAtendimento === 'agendamento')
    return (
      <>
        <Stack
          sx={{
            marginBottom: '2vh',
            marginTop: '8vh',
            padding: '2vh',
            width: '75vw',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'white'
                : theme.palette.primary.main[300],
          }}
        >
          <Divider />
          <Typography marginTop="5vh" marginBottom="2vh" variant="h6">
            AGENDAMENTO
          </Typography>

          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === 'light' ? 'grey' : 'white',
            }}
          >
            Uma equipe especializada da Defensoria Pública está analisando o seu
            caso. Assim que o seu agendamento for confirmado, você receberá uma
            notificação.
          </Typography>
        </Stack>
        <Grid
          display={'flex'}
          alignContent={'center'}
          justifyContent={matches ? 'left' : 'center'}
          container
          rowSpacing={{ xs: 10, sm: 10, md: 8 }}
          columns={{ sm: 1, md: 4 }}
        >
          {/*  cards status atendimento  */}

          <CardAtendimento props={{ tipoAtendimento: 'agendamento' }} />
        </Grid>
      </>
    )
}
