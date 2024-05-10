'use client'

// Framework
import { Card, CardContent, CardHeader, Paper } from '@mui/material'
import { Tabela } from '@/app/(painel-assistido)/components/Tabela'

// Internal

// Simulação temporária de um retorno de dados
// TODO: Remover essa simulação quando realizar a integração
const simularDocumentos = [
  // Situações:
  // 1 - pendente (enviar)
  // 2 - em análise
  // 3 - reenviar
  // 4 - aprovado
  {
    nome: '(Enviar) - Obrigatório',
    situacao: 1,
    obrigatorio: true,
    dataUpload: null,
  },
  {
    nome: '(Enviar) - Não obrigatório',
    situacao: 1,
    obrigatorio: false,
    dataUpload: null,
  },
  {
    nome: '(Reenviar) - Obrigatório',
    situacao: 3,
    obrigatorio: true,
    dataUpload: null,
  },
  {
    nome: '(Reenviar) - Não obrigatório',
    situacao: 3,
    obrigatorio: false,
    dataUpload: null,
  },
  {
    nome: 'Em análise',
    situacao: 2,
    obrigatorio: false,
    dataUpload: null,
  },
  {
    nome: 'Aprovado',
    situacao: 4,
    obrigatorio: false,
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

interface Documentos {
  nome: string
  situacao: number
  obrigatorio: boolean
}

function classificarDocumentosPorSituacao(
  documentos: Documentos[] | undefined,
  situacoes: number[],
): Documentos[] | undefined {
  return documentos?.filter((doc) =>
    situacoes.includes(doc?.situacao ? doc.situacao : 1),
  )
}

export function CardDocumentosEPerguntas() {
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
          documentos={classificarDocumentosPorSituacao(
            simularDocumentos,
            [1, 3],
          )}
        />
        <Tabela
          id={'analise'}
          configuracaoTabela={{
            corTabela: 'azul',
            iconeTabela: 'relogio',
            nomeTabela: 'Em Análise',
            colunas: padraoTabela,
          }}
          documentos={classificarDocumentosPorSituacao(simularDocumentos, [2])}
        />
        <Tabela
          id={'aprovado'}
          configuracaoTabela={{
            corTabela: 'verde',
            iconeTabela: 'aprovado',
            nomeTabela: 'Aprovados',
            colunas: padraoTabela,
          }}
          documentos={classificarDocumentosPorSituacao(simularDocumentos, [4])}
        />
      </CardContent>
    </Card>
  )
}
