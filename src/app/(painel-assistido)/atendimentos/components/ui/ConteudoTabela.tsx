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
import { ModalPedidoDocumento } from './ModalPedidoDocumento'
import { SITUACAO_ATENDIMENTO } from '@/constants/atendimento'

// Internal

// Define tipos das propriedades recebidas por ConteudoTabela
interface ConteudoTabelaProps {
  nome?: string
  ehDocumento: boolean
  situacao: number
  obrigatorio?: boolean
  dataEnviado?: string | null
  dataUpload?: string | null
  numero?: string | undefined
  dataAgendamento?: string | null
  dataAtendimento?: string | null
  horarioAgendamento?: string | null
  quantidadePendencia?: number | undefined
}

const ModalAcoesContainer = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '15px',
    minWidth: '90%',
  },
  '& .MuiDialogTitle-root': {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
  },
  '& .MuiDialogContent-root': {
    paddingTop: '15px !important',
    borderBottom: '1px solid #c9c9c9',
  },
  '& .MuiDialogActions-root': {
    justifyContent: 'space-around',
  },
}))

const sxTextoBotao = {
  fontWeight: 'bolder',
  fontSize: '0.7rem',
  width: 'max-content',
}

export function ConteudoTabela({
  nome,
  ehDocumento,
  situacao,
  obrigatorio,
  dataUpload,
  numero,
  dataAgendamento,
  dataAtendimento,
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
  const [openModal, setOpenModal] = useState(false)
  const [openModalNaoTenho, setOpenModalNaoTenho] = useState(false)

  /**
   * Essa função define os estilos dos botões da coluna "Enviar Documentos", também cuidando de mostrar o o status desses documentos quando já enviado.
   * @param {number} tipo - Define o tipo de botão que será usado
   */
  const estiloBotao = (tipo: number = situacao) => {
    // Situações:
    // 1 - pendente (enviar)
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
    let texto = 'error'

    // Verifica se os botões devem seguir o padrão de documentos ou não
    const tipoDeBotao = ehDocumento ? tipo : 6

    switch (tipoDeBotao) {
      case 1:
        cor = cores.vermelho
        texto = 'ENVIAR'
        break
      case 2:
        cor = cores.azul
        texto = 'EM ANÁLISE'
        break
      case 3:
        cor = cores.vermelho
        texto = 'REENVIAR'
        break
      case 4:
        cor = cores.verde
        texto = 'APROVADO'
        break
      case 5:
        cor = cores.cinza
        texto = 'NÃO TENHO'
        break
      case 6:
        cor = cores.azulEscuro
        texto = 'VISUALIZAR'
        break
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

    return { cor, texto, sxBotao }
  }

  return (
    <>
      {/* Define a linha com estilo próprio para poder alternar entre as cores "const StyledTableRow". Esse é o container da linha */}
      <StyledTableRow>
        {/* Define celula da linha referente a primeira coluna da tabela (Nome do documento ou do atendimento) */}
        <TableCell
          sx={{
            width: !ehDocumento ? '30% !important' : '50% !important',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {nome}
          </Typography>
          {!ehDocumento ? (
            <Typography
              sx={{
                fontSize: '12px',
              }}
            >
              {` Nº: ${numero}`}
            </Typography>
          ) : null}
        </TableCell>
        {/* Define celula da linha referente a segunda coluna da tabela */}
        {!ehDocumento ? (
          <TableCell
            sx={{
              fontWeight: 600,
              color:
                quantidadePendencia &&
                quantidadePendencia !== 0 &&
                situacao === 1
                  ? 'red'
                  : 'black',
              width: '40% !important',
            }}
            align="center"
          >
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              {situacao === SITUACAO_ATENDIMENTO.pendente
                ? `${quantidadePendencia} Documentos Pendentes`
                : [
                      SITUACAO_ATENDIMENTO.agendamento,
                      SITUACAO_ATENDIMENTO.ausente,
                    ].includes(situacao)
                  ? `${new Date(dataAgendamento || '').toLocaleDateString(
                      'pt-BR',
                      {
                        weekday: 'long',
                        year: '2-digit',
                        day: '2-digit',
                        month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      },
                    )}`
                  : situacao === SITUACAO_ATENDIMENTO.atendido
                    ? `${new Date(dataAtendimento || '').toLocaleDateString(
                        'pt-BR',
                        {
                          weekday: 'long',
                          year: '2-digit',
                          day: '2-digit',
                          month: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        },
                      )}`
                    : 'Pedido em análise'}
            </Typography>
            {situacao === SITUACAO_ATENDIMENTO.ausente ? (
              <Typography
                sx={{
                  color: 'red',
                  fontSize: '12px',
                }}
              >
                (Não compareceu na data marcada)
              </Typography>
            ) : null}
          </TableCell>
        ) : null}
        {/* Define celula da linha referente a terceira coluna da tabela (Enviar Documento) */}
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
                if (ehDocumento) {
                  setOpenModal(!openModal)
                  console.log('Antes abria modal de Documento')
                } else {
                  window.location.href = `atendimentos/${numero}`
                }
              }}
              sx={estiloBotao().sxBotao}
            >
              <Typography sx={sxTextoBotao}>{estiloBotao().texto}</Typography>
            </Button>

            {/* Botão condicional que só aparece quando enviar o documento não é obrigatório. Abre a modal "não tenho" */}
            {!obrigatorio &&
            !dataUpload &&
            ehDocumento &&
            [1, 3].includes(situacao) ? (
              <Button
                onClick={() => {
                  setOpenModalNaoTenho(!openModalNaoTenho)
                  console.log('Antes abria modal de NÃO TENHO Documento')
                }}
                sx={estiloBotao(5).sxBotao}
              >
                <Typography sx={sxTextoBotao}>
                  {estiloBotao(5).texto}
                </Typography>
              </Button>
            ) : null}
          </Box>
        </TableCell>
      </StyledTableRow>

      {/* modal de informações e envio do documento */}
      {ehDocumento ? (
        <ModalAcoesContainer
          open={openModal}
          onClose={() => {
            setOpenModal(false)
          }}
        >
          <ModalPedidoDocumento
            nome={nome}
            situacao={situacao}
          ></ModalPedidoDocumento>
        </ModalAcoesContainer>
      ) : null}

      {/* modal para declarar que não tem documento */}
      {!obrigatorio ? (
        <ModalAcoesContainer
          open={openModalNaoTenho}
          onClose={() => {
            setOpenModalNaoTenho(false)
          }}
        >
          <ModalPedidoDocumento
            nome={nome}
            situacao={situacao}
            naoTenho={true}
          ></ModalPedidoDocumento>
        </ModalAcoesContainer>
      ) : null}
    </>
  )
}
