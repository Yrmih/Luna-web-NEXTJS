'use client'

// Third party
import { DialogTitle, DialogContent, DialogActions } from '@mui/material'

// Animação de alerta

// Define tipos da proriedade da ModalPedidoDocumento
interface ModalPedidoDocumentoProps {
  nome?: string
  situacao: number
  naoTenho?: boolean
}

export function ModalPedidoDocumento({
  nome,
  situacao,
  naoTenho,
}: ModalPedidoDocumentoProps) {
  return (
    <>
      {naoTenho ? (
        // ! Modal para declarar que não tem documento
        <>
          <DialogTitle>{nome}</DialogTitle>
          <DialogContent>não tenho</DialogContent>
          <DialogActions>{situacao}</DialogActions>
        </>
      ) : (
        // ! Modal para enviar documento
        <>
          <DialogTitle>{nome}</DialogTitle>
          <DialogContent>enviar</DialogContent>
          <DialogActions>{situacao}</DialogActions>
        </>
      )}
    </>
  )
}
