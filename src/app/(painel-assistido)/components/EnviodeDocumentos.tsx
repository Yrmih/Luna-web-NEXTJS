'use client'
import {
  Box,
  Typography,
  Button,
  Grid,
  styled,
  TableRow,
  TableCell,
  useMediaQuery,
} from '@mui/material'
import FilePresentIcon from '@mui/icons-material/FilePresent'
import { boolean } from 'zod'

interface EnviodeDocumentoProps {
  props: {
    nomeEnvioDocumento: string
    situacaoDocumento: string
    documentoObrigatorio: boolean
  }
}

export default function EnviodeDocumento({ props }: EnviodeDocumentoProps) {
  // Linhas estilizadas da tabela
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  // Verificar situação do documento para dizer se deve ou não apresentar botão de ação
  const BotaoModal = () => {
    let cor
    let corHover
    let texto
    let obrigatorio = false

    switch (props.situacaoDocumento) {
      case 'pendente':
        cor = 'red'
        corHover = '#fd3131'
        texto = 'ENVIAR'
        obrigatorio = props.documentoObrigatorio
        break
      case 'aprovado':
        cor = 'darkgreen'
        corHover = 'green'
        texto = 'APROVADO'
        break
      case 'reenviar':
        cor = 'red'
        corHover = '#fd3131'
        texto = 'REENVIAR'
        obrigatorio = props.documentoObrigatorio
        break
      case 'em analise':
        cor = '#277a95'
        corHover = '#269bc1'
        texto = 'EM ANÁLISE'
        break
      case 'nao tenho':
        cor = 'darkgreen'
        corHover = 'green'
        texto = 'APROVADO'
        break
    }
    return { cor, corHover, texto, obrigatorio }
  }

  return (
    <StyledTableRow sx={{}}>
      <TableCell sx={{ p: '5px' }}>
        <Typography sx={{ fontSize: '12px', fontWeight: 'bold', ml: '0.5vw' }}>
          {props.nomeEnvioDocumento?.toUpperCase()}
        </Typography>
      </TableCell>
      <TableCell
        align="center"
        sx={{
          justifyContent: 'center',
          allingContent: 'center',
          p: '5px',
        }}
      >
        <Button
          sx={{
            mt: '0.5vh',
            mb: '0.5vh',
            boxShadow: 1,
            width: '18vw',
            '@media (min-width:600px)': {
              width: '13vw',
            },

            '@media (min-width:900px)': {
              width: '9vw',
            },
            '@media (min-width:1200px)': {
              width: '7vw',
            },
            height: 'auto',
            color: 'white',
            bgcolor: BotaoModal().cor,
            '&:hover': {
              backgroundColor: BotaoModal().corHover,
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bolder',
              fontSize: '0.7rem',
              width: 'max-content',
            }}
          >
            {BotaoModal().texto}
          </Typography>
        </Button>
        {BotaoModal().obrigatorio ? (
          <Button
            sx={{
              mt: '0.5vh',
              mb: '0.5vh',
              boxShadow: 1,
              width: '18vw',
              '@media (min-width:600px)': {
                width: '13vw',
              },

              '@media (min-width:900px)': {
                width: '9vw',
              },
              '@media (min-width:1200px)': {
                width: '7vw',
              },

              height: 'auto',
              color: 'white',
              bgcolor: 'grey',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bolder',
                fontSize: '0.7rem',
                width: 'max-content',
              }}
            >
              Não tenho
            </Typography>
          </Button>
        ) : null}
      </TableCell>
    </StyledTableRow>
  )
}
