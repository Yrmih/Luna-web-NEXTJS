'use client'

// Framework
import { Card, CardContent, CardHeader, Paper } from '@mui/material'
import { Tabela } from '@/app/(painel-assistido)/components/Tabela'

// Internal

// Simulação temporária de um retorno de dados
// TODO: Remover essa simulação quando realizar a integração
const simularDocumentos = [
  {
    nome: 'declaração de residência',
    situacao: 3,
    obrigatorio: false,
    dataUpload: null,
  },
  {
    nome: 'DOCUMENTO OBRIGATÓRIO DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
    situacao: 4,
    obrigatorio: true,
    dataUpload: '21/02/2023',
  },
  {
    nome: 'DOCUMENTO NÃO OBRIGATÓRIO DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
    situacao: 1,
    obrigatorio: false,
    dataUpload: null,
  },
  {
    nome: 'DOCUMENTO NÃO OBRIGATÓRIO DECLARAÇÃO DE HIPOSUFICIENCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA DECLARAÇÃO DE RESIDÊNCIA',
    situacao: 4,
    obrigatorio: false,
    dataUpload: '17/03/2023',
  },
  {
    nome: 'DOCUMENTO OBRIGATÓRIO ',
    situacao: 1,
    obrigatorio: true,
    dataUpload: null,
  },
]

const padraoTabela = [
  {
    nome: 'Documento',
  },
  {
    nome: 'Ações',
  },
]

export function CardDocumentoEnvio() {
  return (
    // Card principal dos documentos pendentes (background)
    <Card
      component={Paper}
      elevation={3}
      sx={{
        width: '100%',
        boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)',
      }}
    >
      {/* Header do card */}
      <CardHeader title="Documentos e perguntas pendentes" />
      {/* Body do card */}
      <CardContent>
        {/* Container da tabela */}
        <Tabela
          id={'pendentes'}
          configuracaoTabela={{
            corTabela: 'vermelho',
            iconeTabela: 'atencao',
            nomeTabela: 'Pendências',
            colunas: padraoTabela,
          }}
          documentos={simularDocumentos}
        />
        <Tabela
          id={'analise'}
          configuracaoTabela={{
            corTabela: 'azul',
            iconeTabela: 'relogio',
            nomeTabela: 'Em Análise',
            colunas: padraoTabela,
          }}
          documentos={simularDocumentos}
        />
        <Tabela
          id={'aprovado'}
          configuracaoTabela={{
            corTabela: 'verde',
            iconeTabela: 'aprovado',
            nomeTabela: 'Aprovados',
            colunas: padraoTabela,
          }}
          documentos={simularDocumentos}
        />
      </CardContent>
    </Card>
  )
}
