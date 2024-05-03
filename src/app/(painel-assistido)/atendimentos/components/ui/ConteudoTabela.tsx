'use client'

// Framework
import {
  Typography,
  Button,
  styled,
  TableRow,
  TableCell,
  Dialog,
  rgbToHex,
  Box,
} from '@mui/material'
import { useState } from 'react'
import { ModalEnvioDocumento } from './ModalDocumento'

// Internal

// Define tipos das propriedades recebidas por ConteudoTabela
interface ConteudoTabelaProps {
  nome?: string
  situacao: string
  obrigatorio?: boolean
  dataEnviado?: string | null
  dataUpload?: string | null
  dadoRecusa?: string | null
  numeroColunas: number
  numero?: string | undefined
  dataAgendamento?: string | null
  horarioAgendamento?: string | null
  quantidadePendencia?: number | undefined
}

export function ConteudoTabela({
  nome,
  situacao,
  obrigatorio,
  dataEnviado,
  dataUpload,
  dadoRecusa,
  numeroColunas,
  numero,
  dataAgendamento,
  horarioAgendamento,
  quantidadePendencia,
}: ConteudoTabelaProps) {
  // Define a cor da alternação das linhas da tabela (impar)
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    // Esconde a última borda
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  // States para controle de abertura de modal
  const [openNaotenho, setOpenNaotenho] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openEnvioArquivo, setOpenEnvioArquivo] = useState(false)

  /**
   * Essa função define os estilos dos botões da coluna "Enviar Documentos", também cuidando de mostrar o o status desses documentos quando já enviado.
   * @param {string} tipo - Define o tipo de botão que será usado
   */
  const estiloBotao = (tipo = situacao) => {
    // Situações:
    // 1 - pendente
    // 2 - em análise
    // 3 - reenviar
    // 4 - aprovado
    const cores = {
      vermelho: 'rgb(220, 0, 0, 1)',
      verde: 'rgb(0, 100, 0, 1)',
      azul: 'rgb(39, 122, 149, 1)',
      azulEscuro: 'rgb(0, 45, 120, 1)',
      cinza: 'rgb(169, 169, 169, 1)',
    }
    let cor = 'rgb(169, 169, 169, 1)'
    let texto = 'teste'

    const tipoDeBotao = numeroColunas === 2 ? tipo : '6'

    switch (tipoDeBotao) {
      case '1':
        cor = cores.vermelho
        texto = 'ENVIAR'
        break
      case '2':
        cor = cores.azul
        texto = 'EM ANÁLISE'
        break
      case '3':
        cor = cores.vermelho
        texto = 'REENVIAR'
        break
      case '4':
        cor = cores.verde
        texto = 'APROVADO'
        break
      case '5':
        cor = cores.cinza
        texto = 'NÃO TENHO'
        break
      case '6':
        cor = cores.azulEscuro
        texto = 'VISUALIZAR'
        break
    }

    const sxTexto = {
      fontWeight: 'bolder',
      fontSize: '0.7rem',
      width: 'max-content',
    }

    const sxBotao = {
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
      bgcolor: cor,
      '&:hover': {
        backgroundColor: rgbToHex(cor.replace(/..$/g, '0.65)')),
      },
    }

    return { cor, texto, sxBotao, sxTexto }
  }

  return (
    <>
      {/* Define a linha com estilo próprio para poder alternar entre as cores "const StyledTableRow". Esse é o container da linha */}
      <StyledTableRow>
        {/* Define celula da linha referente a primeira coluna da tabela (Nome do documento) */}
        <TableCell
          sx={{
            width: numeroColunas === 3 ? '30% !important' : '50% !important',
          }}
        >
          {numeroColunas === 3 ? (
            <>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              ></Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {` NÚMERO: ${numero}`}
              </Typography>
            </>
          ) : (
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              {nome?.toUpperCase()}
            </Typography>
          )}
        </TableCell>
        {numeroColunas === 3 ? (
          <TableCell
            sx={{
              fontWeight: 600,
              color:
                quantidadePendencia && quantidadePendencia !== 0
                  ? 'red'
                  : 'black',
              width: '40% !important',
            }}
            align="center"
          >
            {quantidadePendencia !== 0
              ? `${quantidadePendencia} DOCUMENTOS PENDENTES`
              : situacao === '1' || situacao === '3'
                ? 'NENHUM DOCUMENTO PENDENTE'
                : `${dataAgendamento} as ${horarioAgendamento}`}
          </TableCell>
        ) : null}
        {/* Define celula da linha referente a segunda coluna da tabela (Enviar Documento) */}
        <TableCell align="center">
          <Box
            sx={{
              display: 'grid',
              justifyContent: 'end',
            }}
          >
            {/* As ações do botão são: exibe modais para envio de documento (caso documento pendente) */}
            <Button
              onClick={() => {
                if (['4', '2'].includes(situacao)) {
                  setOpenModal(!openModal)
                } else if (numeroColunas === 2) {
                  setOpenEnvioArquivo(true)
                } else {
                  window.location.href = `atendimentos/${numero}`
                }
              }}
              sx={estiloBotao().sxBotao}
            >
              <Typography sx={estiloBotao().sxTexto}>
                {estiloBotao().texto}
              </Typography>
            </Button>

            {/* Botão condicional que só aparece quando enviar o documento não é obrigatório. Abre a modal "não tenho" */}
            {!obrigatorio && !dataUpload && numeroColunas === 2 ? (
              <Button
                onClick={() => {
                  setOpenNaotenho(true)
                }}
                sx={estiloBotao('5').sxBotao}
              >
                <Typography sx={estiloBotao('5').sxTexto}>
                  {estiloBotao('5').texto}
                </Typography>
              </Button>
            ) : null}
          </Box>
        </TableCell>
      </StyledTableRow>

      {/* Modal quando o botão é destinado ao "envio" ou "reenvio" de documento */}
      <Dialog
        open={openEnvioArquivo}
        onClose={() => {
          setOpenEnvioArquivo(false)
        }}
      >
        <ModalEnvioDocumento
          props={{
            nomeEnvioDocumento: nome,
            tipoModal: 'envio',
            handleValue: openEnvioArquivo,
            handleAction: setOpenEnvioArquivo,
            situacao,
            dataEnviado,
            dadoRecusa: dadoRecusa || null,
          }}
        ></ModalEnvioDocumento>
      </Dialog>

      {/* Modal quando o botão é destinado a declarar que "não tem" documento */}
      <Dialog
        open={openNaotenho}
        onClose={() => {
          setOpenNaotenho(false)
        }}
      >
        <ModalEnvioDocumento
          props={{
            nomeEnvioDocumento: nome,
            tipoModal: 'nao tenho',
            handleValue: openNaotenho,
            handleAction: setOpenNaotenho,
            situacao,
            dataEnviado,
          }}
        ></ModalEnvioDocumento>
      </Dialog>

      <Dialog
        open={openModal}
        onClose={() => {
          setOpenModal(false)
        }}
      >
        <ModalEnvioDocumento
          props={{
            nomeEnvioDocumento: nome,
            tipoModal: 'info',
            handleValue: openModal,
            handleAction: setOpenModal,
            situacao,
            dataEnviado,
          }}
        ></ModalEnvioDocumento>
      </Dialog>
    </>
  )
}
