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
  horarioAgendamento?: string
  quantidadePendencia?: number
  // abaixo segue o integrado
  area?: string
  qualificacao?: string
  numero?: string
  dataAgendamento?: string
  dataAtendimento?: string
  documentosPendentes?: number
}

interface Colunas {
  nome: string
}

interface TabelaProps {
  id: string
  conteudo: Dados[]
  configuracaoTabela: {
    corTabela: keyof typeof cores
    iconeTabela: keyof typeof icones
    nomeTabela: string
    colunas: Colunas[]
  }
}

export function Tabela({ id, configuracaoTabela, conteudo }: TabelaProps) {
  const totalColunas = configuracaoTabela.colunas.length

  const ocultarTabela = () => {
    const elementos = document.querySelectorAll<HTMLElement>(`#${id}`)

    elementos.forEach((elemento) => {
      const visibility = elemento.style.visibility
      elemento.style.transition = '0.2s'
      elemento.style.opacity = visibility === 'collapse' ? '1' : '0'
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
                <Badge badgeContent={conteudo.length} color="error" showZero>
                  <Icon
                    sx={{
                      marginRight: '1px',
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
            visibility: id === 'pedidos_pendentes' ? 'visible' : 'collapse',
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
                <Typography fontSize={15} fontWeight={500}>
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
            visibility: id === 'pedidos_pendentes' ? 'visible' : 'collapse',
          }}
        >
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
