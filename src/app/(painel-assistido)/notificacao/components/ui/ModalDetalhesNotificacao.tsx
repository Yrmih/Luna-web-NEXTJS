'use client'

// Third party
import CloseIcon from '@mui/icons-material/Close'
import { CardHeader, Container, IconButton, Modal, Paper } from '@mui/material'

// Framework
import React from 'react'
import { CardNotificacao } from './CardNotificacao'
import { CustomSubheader } from './TableNotificar'

// Internal

export function ModalDetalhesNotificacao({
  params: { id },
}: {
  params: { id: string }
}) {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => {
    setOpen((prev) => !prev)
    handleClose()
  }

  const handleClose = () => {
    window.history.back()
  }
  return (
    <Modal
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      open={open}
      onClose={handleOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container
        component={Paper}
        maxWidth={'lg'}
        sx={{ mt: 4, marginX: 4, paddingX: 4, paddingTop: 2, borderRadius: 4 }}
      >
        <CardNotificacao>
          <CardHeader
            title={'Notificações'}
            subheader={
              <CustomSubheader
                subheader1={id}
                subheader2={`Data de envio: ${'2023-11-08'}`}
              />
            }
            action={
              <IconButton onClick={handleOpen}>
                <CloseIcon color="primary" />
              </IconButton>
            }
            sx={{ width: '100%', height: '4.125rem' }}
          />
        </CardNotificacao>
      </Container>
    </Modal>
  )
}
