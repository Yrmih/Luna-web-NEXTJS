// Third party
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useLoginStateDialogs } from '../../context'

// Internal

export function NaoTemAtendimentoDialog() {
  const {
    openNaoTemAtendimentoDialog: open,
    handleOpenNaoTemAtendimentoDialog: handleClose,
  } = useLoginStateDialogs()

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Desculpe, nenhum atendimento seu foi encontrado no sistema.
      </DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={'2vh'}>
          {`Clique no botão abaixo, se você deseja solicitar o atendimento na ${process.env.NEXT_PUBLIC_DEFENSORIA_NOME}`}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-around' }}>
        <Button
          href="/nova-solicitacao"
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
          Solicitar Atendimento
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
