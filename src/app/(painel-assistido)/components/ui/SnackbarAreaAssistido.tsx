'use client'

// Third party
import { Alert, Fade, Snackbar } from '@mui/material'

// Internal
import { useSnackbarAreaAssistidoState } from '../../context/SnackbarAreaAssistidoStateProvider'

export function SnackbarAreaAssistido() {
  const { open, handleClose, type, message } = useSnackbarAreaAssistidoState()

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  )
}
