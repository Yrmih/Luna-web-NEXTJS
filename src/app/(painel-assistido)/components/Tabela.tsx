// Third party
'use client'

// framework
import {
  Badge,
  Box,
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  rgbToHex,
} from '@mui/material'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
// Internal
import { ConteudoTabela } from '../atendimentos/components/ui/ConteudoTabela'
import { AtendimentoPessoaListResponse } from '@/lib/solar-client/SolarApi'

const cores = {
  vermelho: 'rgb(220, 0, 0, 1)',
  verde: 'rgb(0, 100, 0, 1)',
  azul: 'rgb(39, 122, 149, 1)',
  amarelo: 'rgb(255, 201, 12, 1)',
}
const icones = {
  atencao: <ReportProblemIcon />,
  relogio: <AccessTimeFilledIcon />,
  aprovado: <CheckCircleIcon />,
}

interface Colunas {
  nome: string
}

interface Documentos {
  nome: string
  situacao: number
}

interface TabelaProps {
  id: string
  documentos?: Documentos[] | undefined
  conteudo?: AtendimentoPessoaListResponse[] | undefined
  configuracaoTabela: {
    corTabela: keyof typeof cores
    iconeTabela: keyof typeof icones
    nomeTabela: string
    colunas: Colunas[]
  }
}

export function Tabela({
  id,
  configuracaoTabela,
  conteudo,
  documentos,
}: TabelaProps) {
  const totalColunas = configuracaoTabela.colunas.length

  // TODO: Remover console só para evitar erro

  const ocultarTabela = () => {
    const elementos = document.querySelectorAll<HTMLElement>(`#${id}`)

    elementos.forEach((elemento) => {
      const visibility = elemento.style.visibility
      elemento.style.visibility =
        visibility === 'collapse' ? 'visible' : 'collapse'
    })
  }

  return (
    <TableContainer
      sx={{
        mt: 2,
        borderRadius: '15px',
        marginBottom: '23px',
        boxShadow:
          '3px 4px 3px -1px rgba(151, 151, 151, 0.2),1px 1px 2px 1px rgba(130, 130, 130, 0.14),2px 2px 3px 1px rgba(9, 9, 9, 0.12)',
      }}
      component={Paper}
    >
      <Table>
        {/* Header da categoria da Tabela */}
        <TableHead
          sx={{
            paddingBottom: '50px',
          }}
          onClick={() => {
            ocultarTabela()
          }}
        >
          <TableRow
            sx={{
              backgroundColor: rgbToHex(
                cores[configuracaoTabela.corTabela].replace(/..$/g, '0.2)'),
              ),
            }}
          >
            <TableCell colSpan={totalColunas}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '5px',
                }}
              >
                <Typography align="center" fontWeight={500}>
                  {configuracaoTabela.nomeTabela}
                </Typography>
                <Badge
                  badgeContent={
                    conteudo ? conteudo?.length : documentos?.length
                  }
                  color="error"
                >
                  <Icon
                    sx={{
                      marginRight: '2px',
                      color: rgbToHex(
                        cores[configuracaoTabela.corTabela].replace(
                          /..$/g,
                          '0.8)',
                        ),
                      ),
                    }}
                  >
                    {icones[configuracaoTabela.iconeTabela]}
                  </Icon>
                </Badge>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Header das colunas (define o nome das colunas e quantidade) */}
        <TableHead
          id={id}
          style={{
            visibility: 'collapse',
          }}
        >
          <TableRow
            sx={{
              backgroundColor: rgbToHex(
                cores[configuracaoTabela.corTabela].replace(/..$/g, '0.1)'),
              ),
            }}
          >
            {/* Colunas da tabela */}
            {configuracaoTabela.colunas.map((item, index) => (
              <TableCell
                key={Math.random()}
                sx={{
                  textAlign:
                    index === 0
                      ? 'left'
                      : index === totalColunas - 1
                        ? 'right'
                        : 'center',
                }}
              >
                <Typography
                  fontSize={15}
                  fontWeight={500}
                  marginRight={index === totalColunas - 1 ? '10px' : '0px'}
                >
                  {item.nome}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Body da tabela */}
        <TableBody
          id={id}
          style={{
            visibility: 'collapse',
          }}
        >
          {/* Componente que preenche as linhas da tabela */}
          {conteudo?.map((item) => (
            <ConteudoTabela
              key={Math.random()}
              nome={item.qualificacao}
              ehDocumento={false}
              situacao={item?.situacao ? item.situacao : 1}
              numero={item.numero}
              dataAgendamento={item.data_agendamento}
              dataAtendimento={item.data_atendimento}
              quantidadePendencia={item.documentos_pendentes}
            ></ConteudoTabela>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
