'use client'

import { Alert, Fade, Snackbar } from '@mui/material'
import { useSnackbarAreaAssistidoState } from '../hooks/SnackbarAreaAssistidoStateProvider'

export function SnackbarAreaAssistido() {
  const { open, handleClose, type, message } = useSnackbarAreaAssistidoState()

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  )
}
