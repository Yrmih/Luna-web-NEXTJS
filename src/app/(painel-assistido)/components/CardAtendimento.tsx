'use client'
import {
  Stack,
  Box,
  Typography,
  Divider,
  Button,
  useMediaQuery,
  Grid,
} from '@mui/material'
import DateRange from '@mui/icons-material/DateRange'
import GavelIcon from '@mui/icons-material/Gavel'
import Check from '@mui/icons-material/Check'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import BalanceIcon from '@mui/icons-material/Balance'
import DomainIcon from '@mui/icons-material/Domain'
import EventIcon from '@mui/icons-material/Event'

interface CardAtendimentoProps {
  props: {
    tipoAtendimento?: string
  }
}
export default function CardAtendimento({ props }: CardAtendimentoProps) {
  const matches = useMediaQuery('(min-width:900px)')

  if (props.tipoAtendimento === 'pre')
    return (
      <Grid
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        item
        md={2}
      >
        <Stack
          borderRadius={'5vw'}
          direction={'column'}
          justifyContent={'space-between'}
          sx={{
            '&:hover': {
              boxShadow: 20,
              width: '70vw',

              '@media (min-width:900px)': {
                width: '30vw',
              },
            },
            boxShadow: 5,
            width: '70vw',

            '@media (min-width:900px)': {
              borderRadius: '1vw',
              width: '30vw',
            },
          }}
        >
          {/*  cor status atendimento  */}
          <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
              borderTopLeftRadius: '5vw',
              borderTopRightRadius: '5vw',
              height: '25vh',
              background: 'linear-gradient(to left , #f48fb1, #ff5252 )',
              '@media (min-width:900px)': {
                borderTopLeftRadius: '1vw',
                borderTopRightRadius: '1vw',
              },
            }}
          >
            {/*   container titulo status atendimento  */}
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                borderTopLeftRadius: '5vw',
                borderTopRightRadius: '5vw',
                height: '8vh',

                background: 'linear-gradient(to left , #dc7e9b, #e54b4b )',
                '@media (min-width:900px)': {
                  borderTopLeftRadius: '1vw',
                  borderTopRightRadius: '1vw',
                },
              }}
            >
              {/* titulo status atendimento  */}
              <Typography fontWeight={400} color="white" variant="subtitle1">
                PRÉ-AGENDAMENTO
              </Typography>
            </Box>
            {/* container numero atendimento  */}
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                height: '15vh',
              }}
            >
              <Typography color="white" fontWeight={500} variant="h4">
                234234265656
              </Typography>
              <Typography
                color="white"
                fontWeight={400}
                variant="subtitle1"
                marginTop={'1vh'}
              >
                Número do Atendimento
              </Typography>
            </Box>
          </Box>
          {/* container infos */}
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <Check sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Situação:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Em Análise
              </Typography>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <GavelIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Assunto:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                AÇÃO DE ALIMENTOS
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ width: '100%' }}
          >
            <Button
              href={`atendimentos/${234234265656}`}
              sx={{
                marginTop: '2vh',
                mb: '2vh',
                bgcolor: '#023B7E',
                '&:hover': {
                  backgroundColor: '#005bc9',
                },
              }}
              variant="contained"
            >
              Visualizar
            </Button>
          </Box>
        </Stack>
      </Grid>
    )
  if (props.tipoAtendimento === 'atendimento')
    return (
      <Grid
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        item
        md={2}
      >
        <Stack
          borderRadius={'5vw'}
          direction={'column'}
          justifyContent={'space-between'}
          sx={{
            '&:hover': {
              boxShadow: 20,
              width: '70vw',

              '@media (min-width:900px)': {
                width: '30vw',
              },
            },
            boxShadow: 5,
            width: '70vw',

            '@media (min-width:900px)': {
              borderRadius: '1vw',
              width: '30vw',
            },
          }}
        >
          {/*  cor status atendimento  */}
          <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
              borderTopLeftRadius: '5vw',
              borderTopRightRadius: '5vw',
              height: '25vh',
              background: 'linear-gradient(to left , #64d7ff, #0097cb )',
              '@media (min-width:900px)': {
                borderTopLeftRadius: '1vw',
                borderTopRightRadius: '1vw',
              },
            }}
          >
            {/*   container titulo status atendimento  */}
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                borderTopLeftRadius: '5vw',
                borderTopRightRadius: '5vw',
                height: '8vh',
                background: 'linear-gradient(to left ,#54b9dd , #0386b2 )',

                '@media (min-width:900px)': {
                  borderTopLeftRadius: '1vw',
                  borderTopRightRadius: '1vw',
                },
              }}
            >
              {/* titulo status atendimento  */}
              <Typography fontWeight={400} color="white" variant="subtitle1">
                ATENDIMENTO
              </Typography>
            </Box>
            {/* container numero atendimento  */}
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                height: '15vh',
              }}
            >
              <Typography color="white" fontWeight={500} variant="h4">
                23424536575
              </Typography>
              <Typography
                color="white"
                fontWeight={400}
                variant="subtitle1"
                marginTop={'1vh'}
              >
                Número do Atendimento
              </Typography>
            </Box>
          </Box>
          {/* container infos */}
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <DomainIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Local de Atendimento:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Núcleo de Vila Velha
              </Typography>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <GavelIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Assunto:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                AÇÃO DE ALIMENTOS
              </Typography>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <AccountCircleIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Defensor:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Fulano de Tal da Silva
              </Typography>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <BalanceIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Defensoria:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Núcleo de Execução Penal (NEPE)
              </Typography>
            </Box>
          </Box>

          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <DateRange sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Data do Atendimento:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                10/12/2023 as 00:00
              </Typography>
            </Box>
          </Box>

          <Divider />
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ width: '100%' }}
          >
            <Button
              href={`atendimentos/${23424536575}`}
              sx={{
                marginTop: '2vh',
                mb: '2vh',
                bgcolor: '#023B7E',
                '&:hover': {
                  backgroundColor: '#005bc9',
                },
              }}
              variant="contained"
            >
              Visualizar
            </Button>
          </Box>
        </Stack>
      </Grid>
    )
  if (props.tipoAtendimento === 'agendamento')
    return (
      <Grid
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        item
        md={2}
      >
        <Stack
          borderRadius={'5vw'}
          direction={'column'}
          justifyContent={'space-between'}
          sx={{
            '&:hover': {
              boxShadow: 20,
              width: '70vw',

              '@media (min-width:900px)': {
                width: '30vw',
              },
            },
            boxShadow: 5,
            width: '70vw',

            '@media (min-width:900px)': {
              borderRadius: '1vw',
              width: '30vw',
            },
          }}
        >
          {/*  cor status atendimento  */}
          <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
              borderTopLeftRadius: '5vw',
              borderTopRightRadius: '5vw',
              height: '25vh',
              background: 'linear-gradient(to left , #ffc90c, #ff8400 )',
              '@media (min-width:900px)': {
                borderTopLeftRadius: '1vw',
                borderTopRightRadius: '1vw',
              },
            }}
          >
            {/*   container titulo status atendimento  */}
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                borderTopLeftRadius: '5vw',
                borderTopRightRadius: '5vw',
                height: '8vh',
                background: 'linear-gradient(to left , #e5b40b, #e57800 )',
                '@media (min-width:900px)': {
                  borderTopLeftRadius: '1vw',
                  borderTopRightRadius: '1vw',
                },
              }}
            >
              {/* titulo status atendimento  */}
              <Typography fontWeight={400} color="white" variant="subtitle1">
                AGENDAMENTO
              </Typography>
            </Box>
            {/* container numero atendimento  */}
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                height: '15vh',
              }}
            >
              <Typography color="white" fontWeight={500} variant="h4">
                234234234234
              </Typography>
              <Typography
                color="white"
                fontWeight={400}
                variant="subtitle1"
                marginTop={'1vh'}
              >
                Número do Atendimento
              </Typography>
            </Box>
          </Box>
          {/* container infos */}
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <EventIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Data de Agendamento:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                10/12/2023 as 00:00
              </Typography>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <GavelIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Assunto:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                AÇÃO DE ALIMENTOS
              </Typography>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <AccountCircleIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Defensor:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Fulano de Tal da Silva
              </Typography>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={matches ? 'row' : 'column'}
            justifyContent={'left'}
            alignItems={'flex-start'}
            sx={{
              paddingLeft: '4vw',
              marginBottom: '1vh',
              marginTop: '1vh',

              width: '100%',
            }}
          >
            {/* infos */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'left'}
              alignItems={'flex-start'}
            >
              <BalanceIcon sx={{ marginRight: '1vw' }} />
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Defensoria:
              </Typography>
            </Box>
            <Box
              sx={{ marginLeft: '0.5vw' }}
              display={'flex'}
              justifyContent={'left'}
              alignItems={'center'}
            >
              <Typography
                fontWeight="bold"
                color="#292929de"
                variant="subtitle1"
              >
                Núcleo de Execução Penal (NEPE)
              </Typography>
            </Box>
          </Box>

          <Divider />
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ width: '100%' }}
          >
            <Button
              href={`atendimentos/${234234234234}`}
              sx={{
                marginTop: '2vh',
                mb: '2vh',
                bgcolor: '#023B7E',
                '&:hover': {
                  backgroundColor: '#005bc9',
                },
              }}
              variant="contained"
            >
              Visualizar
            </Button>
          </Box>
        </Stack>
      </Grid>
    )
}
