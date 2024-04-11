import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Typography,
  rgbToHex,
} from '@mui/material'
interface CardInfoMinhasSolicitacoesProps {
  quantidadeDocumentosPendentes: number | undefined
}
export function CardInfoMinhasSolicitacoes({
  quantidadeDocumentosPendentes,
}: CardInfoMinhasSolicitacoesProps) {
  return (
    <Grid display="flex" justifyContent={'space-around'} container>
      <Card
        component={Paper}
        sx={{
          p: 4,
          width: '25vw',
          height: '32vh',
          boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)', // sombreamento
          borderRadius: '3vh',
          paddingTop: '8vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ textAlign: 'center', fontWeight: 600 }}>
          Você tem
        </Typography>
        <Typography
          sx={{
            fontSize: '4rem',
            color: 'red',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          {quantidadeDocumentosPendentes}
        </Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: 600 }}>
          Pedido(s) com documentos pendentes
        </Typography>
      </Card>
      <Box
        sx={{
          marginBottom: '15px',
        }}
      ></Box>
      <Card
        component={Paper}
        sx={{
          p: 4,
          height: '32vh',
          width: '25vw',
          boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)', // sombreamento
          borderRadius: '3vh',
          paddingTop: '8vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ textAlign: 'center', fontWeight: 600 }}>
          Seu próximo Atendimento será dia:
        </Typography>
        <Typography
          sx={{
            fontSize: '2.5rem',
            color: 'darkblue',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          11/04/2024
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            color: 'darkblue',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          as 09:30
        </Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: 600 }}>
          AÇÃO DE ALIMENTOS
        </Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: 600 }}>
          NÚMERO : 12312313123123
        </Typography>
        <Button
          onClick={() => {
            window.location.href = `atendimentos/${12312313123123}`
          }}
          sx={{
            mt: '2vh',
            mb: '4vh',
            boxShadow: 1,
            width: '18vw',
            '@media (min-width:600px)': {
              width: '13vw',
            },

            '@media (min-width:900px)': {
              width: '9vw',
            },
            '@media (min-width:1200px)': {
              width: '7vw',
            },
            height: 'auto',
            color: 'white',
            bgcolor: 'rgb(0, 45, 120, 1)',
            '&:hover': {
              backgroundColor: rgbToHex(
                'rgb(0, 45, 120, 1)'.replace(/..$/g, '0.65)'),
              ),
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bolder',
              fontSize: '0.7rem',
              width: 'max-content',
            }}
          >
            VISUALIZAR
          </Typography>
        </Button>
      </Card>
    </Grid>
  )
}
