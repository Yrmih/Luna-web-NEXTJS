'use client'
import { Box, Grid, Paper } from '@mui/material'

import { Tabela } from '../components/Tabela'

import { consultarAtendimentoPessoaAssistida } from './services'

import { PageLoading } from '@/components/ui/PageLoading'
import { AtendimentoPessoaListResponse } from '@/lib/solar-client/SolarApi'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

function classificarAtendimentosPorSituacao(
  Atendimentos: AtendimentoPessoaListResponse[] | undefined,
  situacoes: number[],
): AtendimentoPessoaListResponse[] | undefined {
  return Atendimentos?.filter((doc) =>
    situacoes.includes(
      doc?.atendimento?.situacao ? doc.atendimento?.situacao : 1,
    ),
  )
}

// Simulação temporária de um retorno de dados
// TODO: Remover essa simulação quando realizar a integração
// Situações:
// 1 - pendente
// 2 - agendado
// 3 - em análise
// 4 - atendido

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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [atendimentos, setAtendimentos] =
    useState<AtendimentoPessoaListResponse[]>()
  const { data: session } = useSession()

  useEffect(() => {
    setIsLoading(true)
    ;(async function teste() {
      if (session?.user.pessoa) {
        const { sucesso, resultado } =
          await consultarAtendimentoPessoaAssistida({
            pessoa: parseInt(session.user.pessoa),
            situacao: true,
            documentosPendentes: true,
            responsavel: true,
            detalheAtendimento: true,
            somenteInicial: true,
          })

        console.log(sucesso, resultado)

        if (sucesso && resultado) {
          setAtendimentos(resultado.results)
        }
        setIsLoading(false)
      }
    })()
  }, [session])

  return (
    <>
      {isLoading && <PageLoading />}
      {!isLoading && atendimentos && (
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
                Meus Pedidos
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
            {/* Apresenta: Detalhes do atendimento / Atendimentos pendentes */}
            <Grid
              item
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
                  padding: '30px',
                }}
              >
                <Tabela
                  id={'pedidos_pendentes'}
                  configuracaoTabela={{
                    corTabela: 'vermelho',
                    iconeTabela: 'atencao',
                    nomeTabela: 'Pedidos com Pendêncas',
                    colunas: padraoTabela,
                  }}
                  conteudo={classificarAtendimentosPorSituacao(atendimentos, [
                    1,
                  ])}
                />
                <Tabela
                  id={'agendamentos'}
                  configuracaoTabela={{
                    corTabela: 'azul',
                    iconeTabela: 'relogio',
                    nomeTabela: 'Agendamentos',
                    colunas: padraoTabela,
                  }}
                  conteudo={classificarAtendimentosPorSituacao(
                    atendimentos,
                    [2, 6],
                  )}
                />
                <Tabela
                  id={'pedidos_analise'}
                  configuracaoTabela={{
                    corTabela: 'amarelo',
                    iconeTabela: 'relogio',
                    nomeTabela: 'Pedidos em Análise',
                    colunas: padraoTabela,
                  }}
                  conteudo={classificarAtendimentosPorSituacao(atendimentos, [
                    3,
                  ])}
                />
                <Tabela
                  id={'atendidos'}
                  configuracaoTabela={{
                    corTabela: 'verde',
                    iconeTabela: 'aprovado',
                    nomeTabela: 'Atendidos',
                    colunas: padraoTabela,
                  }}
                  conteudo={classificarAtendimentosPorSituacao(atendimentos, [
                    4,
                  ])}
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}
