// Third party
'use client'

// framework
import {
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

interface Dados {
  nome?: string
  situacao: string
  obrigatorio?: boolean
  dataEnviado?: string
  dadoRecusa?: string
  numero?: string
  dataAgendamento?: string
  horarioAgendamento?: string
  quantidadePendencia?: number
}

interface Colunas {
  nome: string
}

interface TabelaProps {
  conteudo: Dados[]
  configuracaoTabela: {
    corTabela: keyof typeof cores
    iconeTabela: keyof typeof icones
    nomeTabela: string
    colunas: Colunas[]
  }
}

export function Tabela({ configuracaoTabela, conteudo }: TabelaProps) {
  const totalColunas = configuracaoTabela.colunas.length

  return (
    <TableContainer sx={{ mt: 2, borderRadius: '15px' }} component={Paper}>
      <Table
        sx={{
          overflow: 'hidden',
        }}
      >
        {/* Header da categoria da Tabela */}
        <TableHead
          sx={{
            paddingBottom: '50px',
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
                <Typography align="center">
                  {configuracaoTabela.nomeTabela}
                </Typography>
                <Icon>{icones[configuracaoTabela.iconeTabela]}</Icon>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Header das colunas (define o nome das colunas e quantidade) */}
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: rgbToHex(
                cores[configuracaoTabela.corTabela].replace(/..$/g, '0.1)'),
              ),
            }}
          >
            {/* Colunas da tabela */}
            {configuracaoTabela.colunas.map((item) => (
              <TableCell
                key={Math.random()}
                sx={{
                  textAlign: 'center',
                }}
              >
                <Typography>{item.nome}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Body da tabela */}
        <TableBody>
          {/* Componente que preenche as linhas da tabela */}
          {conteudo.map((item) => (
            <ConteudoTabela
              key={Math.random()}
              nome={item.nome}
              situacao={item.situacao}
              obrigatorio={item.obrigatorio}
              dataEnviado={item.dataEnviado ? item.dataEnviado : null}
              dadoRecusa={item.dadoRecusa ? item.dadoRecusa : null}
              numeroColunas={totalColunas}
              numero={item.numero}
              dataAgendamento={item.dataAgendamento}
              horarioAgendamento={item.horarioAgendamento}
              quantidadePendencia={item.quantidadePendencia}
            ></ConteudoTabela>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
