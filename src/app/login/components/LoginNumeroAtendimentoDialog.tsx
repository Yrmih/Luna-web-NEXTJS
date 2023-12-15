'use client'

// external libraries
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useMediaQuery,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

export default function LoginAtendimentoDialog() {
  const matches = useMediaQuery('(min-width:900px)')
  return (
    <Dialog open={false} onClose={undefined}>
      <DialogTitle>
        Agora você deve digitar o número do seu atendimento.
      </DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={'2vh'}>
          É aquele número que você recebeu quando fez o primeiro acesso aqui.
          Você anotou ou fez uma foto dele? Caso não encontre o seu número,
          clique abaixo em &quot;Esqueceu Seu Número&quot;
        </DialogContentText>
        <TextField
          fullWidth
          id="input-atendimento"
          label="N° DE ATENDIMENTO"
          variant="standard"
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-around' }}>
        <Button
          sx={{
            marginLeft: '2vw',
            marginBottom: '2vh',
            fontSize: '0.65rem',
            '@media (min-width:600px)': {
              fontSize: '1rem',
            },
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#005bc9' : '#757575',
            },
          }}
          variant="contained"
          endIcon={matches ? <SendIcon /> : ''}
        >
          Enviar
        </Button>
        <Button
          sx={{
            marginRight: '2vw',
            marginBottom: '2vh',
            fontSize: '0.65rem',
            '@media (min-width:600px)': {
              fontSize: '1rem',
            },
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? '#005bc9' : '#757575',
            },
          }}
          variant="contained"
          startIcon={matches ? <PhoneAndroidIcon /> : ''}
        >
          Esqueceu seu número ?
        </Button>
      </DialogActions>
    </Dialog>
  )
}
