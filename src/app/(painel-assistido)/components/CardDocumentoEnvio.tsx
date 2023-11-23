// Third party
'use client'

import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  useMediaQuery,
} from '@mui/material'

// framework

import EnviodeDocumento from './EnviodeDocumentos'
// Internal

export function CardDocumentoEnvio() {
  const matches = useMediaQuery('(max-width:650px)')
  return (
    <Card
      component={Paper}
      elevation={3}
      sx={{
        width: '100%',
        boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)',
      }}
    >
      <CardHeader title="Documentos e perguntas pendentes" />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome do documento</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  Enviar Documento
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <EnviodeDocumento
                props={{
                  nomeEnvioDocumento:
                    'DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
                  situacaoDocumento: 'reenviar',
                  documentoObrigatorio: true,
                }}
              ></EnviodeDocumento>
              <EnviodeDocumento
                props={{
                  nomeEnvioDocumento:
                    'DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
                  situacaoDocumento: 'nao tenho',
                  documentoObrigatorio: true,
                }}
              ></EnviodeDocumento>
              <EnviodeDocumento
                props={{
                  nomeEnvioDocumento:
                    'DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
                  situacaoDocumento: 'em analise',
                  documentoObrigatorio: true,
                }}
              ></EnviodeDocumento>
              <EnviodeDocumento
                props={{
                  nomeEnvioDocumento:
                    'DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
                  situacaoDocumento: 'aprovado',
                  documentoObrigatorio: true,
                }}
              ></EnviodeDocumento>
              <EnviodeDocumento
                props={{
                  nomeEnvioDocumento: 'DECLARAÇÃO DE RESIDÊNCIA ',
                  situacaoDocumento: 'pendente',
                  documentoObrigatorio: true,
                }}
              ></EnviodeDocumento>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}
