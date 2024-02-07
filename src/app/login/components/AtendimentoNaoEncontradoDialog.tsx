import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useLoginStateDialogs } from '../hooks/LoginSateDialogsContext'

export function AtendimentoNaoEncontradoDialog() {
  const {
    openAtendimentoNaoEncontradoDialog: open,
    handleCloseAtendimentoNaoEncontradoDialog: handleClose,
  } = useLoginStateDialogs()

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Atendimento não encontrado.</DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={'2vh'}>
          Você pode conferir o número que você digitou para ver se está correto?{' '}
          {<br />}( {'32985490850'} ) Se você não lembra, tente recuperar seu
          número de atendimento.
        </DialogContentText>
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
        >
          Recuperar N° de Atendimento
        </Button>
        <Button
          onClick={handleClose}
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
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
