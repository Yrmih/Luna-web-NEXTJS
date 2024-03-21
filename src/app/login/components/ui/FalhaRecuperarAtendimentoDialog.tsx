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
import Link from 'next/link'

// Internal

export function FalhaRecuperarAtendimentoDialog() {
  const {
    openFalhaRecuperarAtendimentoDialog: open,
    handleOpenFalhaRecuperarAtendimentoDialog: handleClose,
    handleOpenRecuperarAtendimentoDialog,
  } = useLoginStateDialogs()

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Gostaria de Tentar novamente?</DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={'2vh'}>
          Não consegui recuperar seus números de atendimentos com as informações
          que você me passou. Informe a maior quantidade de campos possível,
          tentando garantir que as informações são as mesmas informadas em seu
          cadastro.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-around' }}>
        <Button
          onClick={() => handleOpenRecuperarAtendimentoDialog()}
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
          Tentar Novamente
        </Button>
        <Button
          LinkComponent={Link}
          href="https://www.defensoria.es.def.br/numeros-para-agendamento/"
          target="_blank"
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
          Preciso de Ajuda
        </Button>
      </DialogActions>
    </Dialog>
  )
}
