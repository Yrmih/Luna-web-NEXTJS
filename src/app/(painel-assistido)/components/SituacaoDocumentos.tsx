'use client'
import { Box, Typography } from '@mui/material'

interface SituacaoDocumentoProps {
  props: {
    situacaoDocumento?: string
  }
}
export default function SituacaoDocumento({ props }: SituacaoDocumentoProps) {
  let cor
  let corHover
  let texto

  switch (props.situacaoDocumento) {
    case 'pendente':
      cor = 'red'
      corHover = 'lightred'
      break
    case 'aprovado':
      cor = 'green'
      break
    case 'reenviar':
      cor = 'orange'
      texto = 'PENDENTE'
      break
    case 'em analise':
      cor = '#277a95'
      break
    case 'nao tenho':
      cor = 'darkgrey'
      break
  }

  return (
  cor,corHover,texto)
