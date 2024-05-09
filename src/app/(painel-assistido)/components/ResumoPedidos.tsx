import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Typography,
  rgbToHex,
} from '@mui/material'
interface ResumoPedidosProps {
  totalDocumentosPendentes: number | undefined
}
export function ResumoPedidos({
  totalDocumentosPendentes,
}: ResumoPedidosProps) {
  return (
    <Grid display="flex" justifyContent={'space-around'} container>
      <Card
        component={Paper}
        sx={{
          p: 4,
          boxShadow:
            '3px 4px 3px -1px rgba(151, 151, 151, 0.2),1px 1px 2px 1px rgba(130, 130, 130, 0.14),2px 2px 3px 1px rgba(9, 9, 9, 0.12)',
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
            fontSize: '1rem',
            color: 'red',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          {totalDocumentosPendentes}
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
          boxShadow:
            '3px 4px 3px -1px rgba(151, 151, 151, 0.2),1px 1px 2px 1px rgba(130, 130, 130, 0.14),2px 2px 3px 1px rgba(9, 9, 9, 0.12)', // sombreamento
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
            fontSize: '1rem',
            color: 'darkblue',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          11/04/2024
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
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
