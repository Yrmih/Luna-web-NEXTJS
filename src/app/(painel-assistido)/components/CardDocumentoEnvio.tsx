// Third party
'use client'

// framework
import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

// Internal
import EnviodeDocumento from './EnvioDeDocumentos'

// Simulação temporária de um retorno de dados
// TODO: Remover essa simulação quando realizar a integração
const simularDocumentos = [
  {
    nome: 'declaração de residência',
    situacao: 'reenviar',
    obrigatorio: false,
    dataUpload: null,
  },
  {
    nome: 'DOCUMENTO OBRIGATÓRIO DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
    situacao: 'nao tenho',
    obrigatorio: true,
    dataUpload: '21/02/2023',
  },
  {
    nome: 'DOCUMENTO NÃO OBRIGATÓRIO DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
    situacao: 'em analise',
    obrigatorio: false,
    dataUpload: '11/05/2023',
  },
  {
    nome: 'DOCUMENTO NÃO OBRIGATÓRIO DECLARAÇÃO DE HIPOSUFICIENCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
    situacao: 'aprovado',
    obrigatorio: false,
    dataUpload: '17/03/2023',
  },
  {
    nome: 'DOCUMENTO OBRIGATÓRIO ',
    situacao: 'pendente',
    obrigatorio: true,
    dataUpload: null,
  },
]

export function CardDocumentoEnvio() {
  return (
    // Card principal dos documentos pendentes (background)
    <Card
      component={Paper}
      elevation={3}
      sx={{
        borderRadius: '3vh',
        width: '100%',
        boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)',
      }}
    >
      {/* Header do card */}
      <CardHeader title="Documentos e perguntas pendentes" />
      {/* Body do card */}
      <CardContent>
        {/* Container da tabela */}
        <TableContainer component={Paper}>
          <Table>
            {/* Header da tabela (define o nome das colunas) */}
            <TableHead>
              <TableRow>
                <TableCell>Nome do documento</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  Enviar Documento
                </TableCell>
              </TableRow>
            </TableHead>
            {/* Body da tabela */}
            <TableBody>
              {/* Componente que preenche as linhas da tabela */}
              {simularDocumentos.map((item) => (
                <EnviodeDocumento
                  key={item.nome}
                  props={{
                    nome: item.nome,
                    situacao: item.situacao,
                    obrigatorio: item.obrigatorio,
                    dataUpload: item.dataUpload ? item.dataUpload : null,
                  }}
                ></EnviodeDocumento>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}
