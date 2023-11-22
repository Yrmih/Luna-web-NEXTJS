'use client'
import { CardNotificacao } from '@/app/notificacao/individual/screem/CardNotificacao'
import { CustomSubheader } from '@/app/notificacao/individual/screem/TableNotificar'
import {
  Box,
  CardHeader,
  Divider,
  Modal,
  Paper,
  Typography,
} from '@mui/material'
import React from 'react'

export default function DetalhesNotificacaoPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component={Paper}
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
            sx={{ width: '100%', height: '4.125rem' }}
          />
        </CardNotificacao>
      </Box>
    </Modal>
  )
}
