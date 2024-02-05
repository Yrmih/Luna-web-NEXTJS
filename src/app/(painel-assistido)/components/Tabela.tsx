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
import EnviodeDocumento from './EnvioDeDocumentos'
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

interface TabelaProps {
  props: {
    corHeaderTabela: keyof typeof cores
    iconeHeader: keyof typeof icones
    numeroColunas: 2 | 3
    nomeHeader: string
    nomeColunaEsquerda: string
    nomeColunaDireita: string
    nomeColunaCentro?: string
    numero?: string
    dataAgendamento?: string
    horarioAgendamento?: string
    quantidadePendencia?: number
    tipo?: string
    dados: any
  }
}

export function Tabela({ props }: TabelaProps) {
  return (
    <TableContainer sx={{ mt: 2 }} component={Paper}>
      <Table>
        {/* Header da tabela (define o nome das colunas) */}
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                textAlign: 'center',
                backgroundColor: rgbToHex(
                  cores[props.corHeaderTabela].replace(/..$/g, '0.2)'),
                ),
              }}
              colSpan={props.numeroColunas}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ textAlign: 'center', fontWeight: 600, pr: '0.5vw' }}
                >
                  {props.nomeHeader}
                </Typography>

                <Icon
                  sx={{
                    color: cores[props.corHeaderTabela],
                  }}
                >
                  {icones[props.iconeHeader]}
                </Icon>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableHead
          sx={{
            backgroundColor: rgbToHex(
              cores[props.corHeaderTabela].replace(/..$/g, '0.05)'),
            ),
          }}
        >
          {/* Nome das colunas */}
          <TableRow>
            <TableCell component="th" sx={{ textAlign: 'left' }}>
              {props.nomeColunaEsquerda}
            </TableCell>
            {props.numeroColunas === 3 ? (
              <TableCell sx={{ textAlign: 'center' }}>
                {props.nomeColunaCentro}
              </TableCell>
            ) : null}
            <TableCell
              sx={{ textAlign: props.numeroColunas === 3 ? 'center' : 'right' }}
            >
              {props.nomeColunaDireita}
            </TableCell>
          </TableRow>
        </TableHead>
        {/* Body da tabela */}
        <TableBody>
          {/* Componente que preenche as linhas da tabela */}
          {props.dados.map((item) => (
            <EnviodeDocumento
              key={item.nome}
              props={{
                nome: item.nome,
                situacao: item.situacao,
                obrigatorio: item.obrigatorio,
                dataEnviado: item.dataEnviado ? item.dataEnviado : null,
                dadoRecusa: item.dadoRecusa ? item.dadoRecusa : null,
                numeroColunas: props.numeroColunas,
                numero: item.numero,
                dataAgendamento: item.dataAgendamento,
                horarioAgendamento: item.horarioAgendamento,
                quantidadePendencia: item.quantidadePendencia,
                tipo: item.tipo,
              }}
            ></EnviodeDocumento>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
