'use client'
import { Box, Grid, Paper } from '@mui/material'

import { Tabela } from '../components/Tabela'

import { CardInfoMinhasSolicitacoes } from '../components/CardInfoMinhasSolicitacoes'
interface Atendimento {
  situacao: string
  numero?: string
  dataAgendamento?: string
  horarioAgendamento?: string
  quantidadePendencia: number
  tipo: 'AÇÃO DE ALIMENTOS'
}
function encontrarAtendimentosPorSituacao(
  Atendimentos: Atendimento[],
  situacoes: string[],
): Atendimento[] {
  return Atendimentos.filter((doc) => situacoes.includes(doc.situacao))
}

// Simulação temporária de um retorno de dados
// TODO: Remover essa simulação quando realizar a integração
// Situações:
// 1 - pendente
// 2 - agendado
// 3 - em análise
// 4 - atendido

const Atendimentos: Atendimento[] = [
  {
    situacao: '1',
    numero: '230830099186',
    quantidadePendencia: 2,
    tipo: 'AÇÃO DE ALIMENTOS',
  },
  {
    situacao: '1',
    numero: '250870015123',
    quantidadePendencia: 2,
    tipo: 'AÇÃO DE ALIMENTOS',
  },
  {
    situacao: '2',
    numero: '120850312253',
    quantidadePendencia: 0,
    dataAgendamento: '05/11/2024',
    horarioAgendamento: '15:10 hs',
    tipo: 'AÇÃO DE ALIMENTOS',
  },
  {
    situacao: '3',
    numero: '163450614763',
    dataAgendamento: '11/06/2024',
    quantidadePendencia: 0,
    tipo: 'AÇÃO DE ALIMENTOS',
  },
  {
    situacao: '3',
    numero: '184555144763',
    dataAgendamento: '22/05/2024',
    quantidadePendencia: 0,
    tipo: 'AÇÃO DE ALIMENTOS',
  },
  {
    situacao: '4',
    numero: '163619845461',
    dataAgendamento: '27/09/2024',
    quantidadePendencia: 0,
    horarioAgendamento: '16:10 hs',
    tipo: 'AÇÃO DE ALIMENTOS',
  },
  {
    situacao: '4',
    numero: '343610154461',
    dataAgendamento: '15/08/2024',
    quantidadePendencia: 0,
    horarioAgendamento: '11:20 hs',
    tipo: 'AÇÃO DE ALIMENTOS',
  },
  {
    situacao: '4',
    numero: '984615464461',
    dataAgendamento: '12/12/2023',
    quantidadePendencia: 0,
    horarioAgendamento: '15:30 hs',
    tipo: 'AÇÃO DE ALIMENTOS',
  },
]

const padraoTabela = [
  {
    nome: 'Atendimento',
  },
  {
    nome: 'Descrição',
  },
  {
    nome: 'Ações',
  },
]

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          p: 0,
          m: 0,
        }}
      >
        <Paper
          sx={{
            p: 0,
            m: 0,
          }}
        >
          <Box
            color="white"
            fontWeight={600}
            fontSize={'1.5rem'}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.primary.main
                  : '#171717',
              paddingTop: '8vh',
              paddingLeft: '5vh',
              width: '100%',
              height: '25vh',
            }}
          >
            Minhas Solicitações
          </Box>
        </Paper>
      </Box>
      <Grid
        container
        sx={{
          flexDirection: 'row-reverse',
          marginTop: '-8vh',
          width: '100%', // O width segue o tamanho disposto para <main> do layout
        }}
      >
        {/* Detalhes do assistido */}
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            paddingBottom: '15px',
            paddingLeft: '2vw',
            paddingRight: '2vw',
          }}
        >
          {/* Componente que trás dados do perfil do assistido */}
          <CardInfoMinhasSolicitacoes
            props={{
              quantidadeDocumentosPendentes: Atendimentos.filter(
                (item) => item?.quantidadePendencia !== 0,
              ).length,
            }}
          />
          {/* Box da margin de um componente para o outro */}
          <Box
            sx={{
              marginBottom: '15px',
            }}
          ></Box>
          {/* Componente que trás dados de processos do assistido */}
        </Grid>
        {/* Apresenta: Detalhes do atendimento / Atendimentos pendentes */}
        <Grid
          item
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{
            paddingLeft: '2vw',
            paddingRight: '2vw',
            paddingBottom: '15px',
          }}
        >
          {/* Box da margin de um componente para o outro */}

          <Grid
            container
            component={Paper}
            elevation={3}
            sx={{
              width: '100%',
              boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)', // Adicione o sombreamento
              borderRadius: '3vh', // Adicione a borda arredondada
            }}
          ></Grid>
          {/* Componente que trás dados dos Atendimentos do atendimento */}
          <Grid
            container
            component={Paper}
            elevation={3}
            sx={{
              p: 4,
              borderRadius: '3vh', // Adicione a borda arredondada
            }}
          >
            <Tabela
              configuracaoTabela={{
                corTabela: 'vermelho',
                iconeTabela: 'atencao',
                nomeTabela: 'Pedidos com Pendêncas',
                colunas: padraoTabela,
              }}
              conteudo={encontrarAtendimentosPorSituacao(Atendimentos, ['1'])}
            />
            <Tabela
              configuracaoTabela={{
                corTabela: 'azul',
                iconeTabela: 'relogio',
                nomeTabela: 'Agendamentos',
                colunas: padraoTabela,
              }}
              conteudo={encontrarAtendimentosPorSituacao(Atendimentos, ['2'])}
            />
            <Tabela
              configuracaoTabela={{
                corTabela: 'amarelo',
                iconeTabela: 'relogio',
                nomeTabela: 'Pedidos em Análise',
                colunas: padraoTabela,
              }}
              conteudo={encontrarAtendimentosPorSituacao(Atendimentos, ['3'])}
            />
            <Tabela
              configuracaoTabela={{
                corTabela: 'verde',
                iconeTabela: 'aprovado',
                nomeTabela: 'Atendidos',
                colunas: padraoTabela,
              }}
              conteudo={encontrarAtendimentosPorSituacao(Atendimentos, ['4'])}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
