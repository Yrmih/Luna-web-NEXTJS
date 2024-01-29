// Third party
'use client'

// framework
import { Card, CardContent, CardHeader, Paper } from '@mui/material'
import { Tabela } from './Tabela'

interface Documento {
  situacao: string
  nome: string
  dataEnviado: string | null
  obrigatorio: boolean
}
function encontrarDocumentosPorSituacao(
  documentos: Documento[],
  situacoes: string[],
): Documento[] {
  return documentos.filter((doc) => situacoes.includes(doc.situacao))
}

// Simulação temporária de um retorno de dados
// TODO: Remover essa simulação quando realizar a integração
// Situações:
// 1 - pendente
// 2 - em análise
// 3 - reenviar
// 4 - aprovado
const documentos: Documento[] = [
  {
    situacao: '1',
    nome: 'CPF',
    dataEnviado: null,
    obrigatorio: true,
  },
  {
    situacao: '1',
    nome: 'DOCUMENTO',
    dataEnviado: null,
    obrigatorio: true,
  },
  {
    situacao: '2',
    nome: 'RG',
    dataEnviado: '15/08/1996',
    obrigatorio: true,
  },
  {
    situacao: '3',
    nome: 'FOTO 3X4',
    dataEnviado: '15/08/1997',
    obrigatorio: false,
  },
  {
    situacao: '4',
    nome: 'COMPROVANTE DE RENDA',
    dataEnviado: '15/08/1998',
    obrigatorio: true,
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
      <CardHeader
        titleTypographyProps={{
          fontWeight: 600,
          fontSize: '1.5rem',

          pl: 1.5,
          pt: 2,
        }}
        title={'Meus Documentos'}
      />
      {/* Body do card */}
      <CardContent>
        {/* Container da tabela */}
        <Tabela
          props={{
            corHeaderTabela: 'vermelho',
            iconeHeader: 'atencao',
            numeroColunas: 2,
            nomeHeader: 'PENDÊNCIAS',
            nomeColunaEsquerda: 'Nome do documento',
            nomeColunaDireita: 'Enviar Documento',
            dados: encontrarDocumentosPorSituacao(documentos, ['1', '3']),
          }}
        ></Tabela>
        <Tabela
          props={{
            corHeaderTabela: 'azul',
            iconeHeader: 'relogio',
            numeroColunas: 2,
            nomeHeader: 'EM ANÁLISE',
            nomeColunaEsquerda: 'Nome do documento',
            nomeColunaDireita: 'Enviar Documento',
            dados: encontrarDocumentosPorSituacao(documentos, ['2']),
          }}
        ></Tabela>
        <Tabela
          props={{
            corHeaderTabela: 'verde',
            iconeHeader: 'aprovado',
            numeroColunas: 2,
            nomeHeader: 'APROVADOS',
            nomeColunaEsquerda: 'Nome do documento',
            nomeColunaDireita: 'Enviar Documento',
            dados: encontrarDocumentosPorSituacao(documentos, ['4']),
          }}
        ></Tabela>
      </CardContent>
    </Card>
  )
}
