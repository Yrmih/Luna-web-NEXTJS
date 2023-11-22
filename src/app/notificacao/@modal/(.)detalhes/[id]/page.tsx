'use client'

import { CardNotificacao } from '@/app/notificacao/detalhes/screem/CardNotificacao'
import { CustomSubheader } from '@/app/notificacao/detalhes/screem/TableNotificar'
import {
  Box,
  CardHeader,
  Container,
  IconButton,
  Modal,
  Paper
} from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function DetalhesNotificacaoPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => {
    setOpen((prev => !prev))
    handleClose()
  }
  
  const handleClose = () => {
      window.history.back()  
  }

  return (
    <Modal
    sx={{ display:'flex', justifyContent:'center',alignItems:'center'}}
      open={open}
      onClose={handleOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
     
      <Container
        component={Paper}
        maxWidth={'lg'}
        sx={{ mt: 4, marginX: 4, paddingX: 4, paddingTop: 2, borderRadius: 4}}
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
            action={<IconButton onClick={handleOpen}>
              <CloseIcon color='primary'/>
            </IconButton>}
            sx={{ width: '100%', height: '4.125rem' }}
          />
        </CardNotificacao>
      </Container>
    </Modal>
  )
}
