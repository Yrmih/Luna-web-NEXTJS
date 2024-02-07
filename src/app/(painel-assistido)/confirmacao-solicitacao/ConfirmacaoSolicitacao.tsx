'use client'
// Internal
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'

import { keyframes } from '@emotion/react'
import { useState } from 'react'

const shake = keyframes`
0% { transform: translate(0px, 0px) rotate(0deg); }
10% { transform: translate(-5px, 0px) rotate(-2.5deg); }
20% { transform: translate(5px, 0px) rotate(2.5deg); }
30% { transform: translate(-5px, 0px) rotate(-2.5deg); }
40% { transform: translate(5px, 0px) rotate(2.5deg); }
50% { transform: translate(0px, 0px) rotate(0deg); }
60% { transform: translate(-5px, 0px) rotate(-2.5deg); }
70% { transform: translate(5px, 0px) rotate(2.5deg); }
80% { transform: translate(-5px, 0px) rotate(-2.5deg); }
90% { transform: translate(5px, 0px) rotate(2.5deg); }
100% { transform: translate(0px, 0px) rotate(0deg); }
`

export default function ConfirmarSolicitacao() {
  const estiloFonteAzul = { color: '#2196f3' }
  const estiloFonteVermelha = { color: 'red' }
  const [estadoBotao, setEstadoBotao] = useState<boolean>(false)
  const alternarEstado = () => {
    setEstadoBotao((prevState) => !prevState)
  }

  const [tremendo, setTremendo] = useState(false)
  const redirect = () => {
    window.location.href = '/home' // Substitua '/outra-rota' pelo caminho desejado
  }
  const handleClique = () => {
    // Quando o botão é clicado, alternamos o estado para acionar a animação de tremor
    setTremendo(true)
    setTimeout(() => {
      setTremendo(false)
    }, 500) // Defina um tempo para parar a animação de tremor
  }

  return (
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
          height: '85vh',
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
          Confirmar Solicitação
        </Box>
        <Stack
          direction={'column'}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? 'white' : '#1b1b1b',
            padding: '2vh',
            paddingTop: '8vh',
            paddingBottom: '8vh',

            boxShadow: 2,
            borderRadius: '3vh',
            marginTop: '0vh',
            '@media (min-width:900px)': {
              marginTop: '-8vh',
              width: '75vw',
            },

            alignItems: 'center',
            width: '90vw',
          }}
        >
          <Box display="flex" flexDirection={'row'}>
            <Typography
              textAlign="center"
              color="#2196f3"
              variant="h6"
              sx={{ mr: '0.5vw', mb: '1vh' }}
            >
              <strong style={estiloFonteAzul}>Quase lá!&nbsp;</strong>
              Agora só falta você enviar os documentos
              <strong style={estiloFonteAzul}>&nbsp;obrigatórios.</strong>
            </Typography>
          </Box>
          <Box display="flex" flexDirection={'row'}>
            <Typography textAlign="center" variant="h6" sx={{ mb: '2vh' }}>
              <strong style={estiloFonteVermelha}>ATENÇÃO:&nbsp;</strong>Se não
              tiver algum documento, você deverá clicar em &quot;não tenho
              &quot;. Anote ou tire uma foto do número do seu atendimento. Você
              vai precisar dele!
            </Typography>
          </Box>
          <Typography variant="h5">Nº Atendimento</Typography>
          <Typography fontWeight="600" color="red" variant="h3">
            123456123456
          </Typography>

          <Button
            sx={{
              animation: tremendo ? `${shake} 1s ease-in-out` : 'none',

              marginTop: '3vh',
              mb: '2vh',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
              '&:hover': {
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light' ? '#005bc9' : '#757575',
              },
            }}
            variant="contained"
            onClick={() => {
              alternarEstado()
            }}
          >
            <CheckBoxOutlineBlankIcon
              sx={{ display: estadoBotao ? 'none' : 'flex', mr: '1vw' }}
            />
            <CheckBoxIcon
              sx={{ display: estadoBotao ? 'flex' : 'none', mr: '1vw' }}
            />
            Li e entendi
          </Button>
          <Button
            onClick={!estadoBotao ? handleClique : redirect}
            sx={{
              bgcolor: !estadoBotao ? 'red' : 'darkgreen',
              '&:hover': {
                backgroundColor: () => (!estadoBotao ? '#fa4040' : 'green'),
              },

              width: '27vw',

              '@media (min-width:900px)': {
                width: '12vw',
              },
              '@media (min-width:1100px)': {
                width: '9vw',
              },
              marginTop: '3vh',
              mb: '2vh',
            }}
            variant="contained"
          >
            Continuar
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}
