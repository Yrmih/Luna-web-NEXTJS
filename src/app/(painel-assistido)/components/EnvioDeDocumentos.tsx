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

// Internal
import ModalEnvioDocumento from './ModalDocumento'

// Define tipos das propriedades recebidas por EnviodeDocumento
interface EnviodeDocumentoProps {
  props: {
    nome: string
    situacao: string
    obrigatorio: boolean
    dataEnviado?: string | null
    dadoRecusa?: string | null
    numeroColunas?: 2 | 3
    numero: string | undefined
    dataAgendamento?: string | null
    horarioAgendamento?: string | null
    quantidadePendencia?: number | undefined
    tipo?: string
  }
}

export default function EnviodeDocumento({ props }: EnviodeDocumentoProps) {
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
   * @param {boolean} botaoNaoTenho - Se TRUE utiliza a lógica de estilo para opção que abre a modal de "não tenho"
   */
  const estiloBotao = (botaoNaoTenho = false) => {
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
    let cor = ''
    let texto

    if (!botaoNaoTenho) {
      switch (props.situacao) {
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
      }
    } else {
      cor = cores.cinza
      texto = 'NÃO TENHO'
    }
    if (props.numeroColunas === 3) {
      cor = cores.azulEscuro
      texto = 'VISUALIZAR'
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
            width:
              props.numeroColunas === 3 ? '30% !important' : '50% !important',
          }}
        >
          {props.numeroColunas === 3 ? (
            <>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {`${props.tipo}`}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {` NÚMERO: ${props.numero}`}
              </Typography>
            </>
          ) : (
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              {props.nome.toUpperCase()}
            </Typography>
          )}
        </TableCell>
        {props.numeroColunas === 3 ? (
          <TableCell
            sx={{
              fontWeight: 600,
              color:
                props.quantidadePendencia && props.quantidadePendencia !== 0
                  ? 'red'
                  : 'black',
              width: '40% !important',
            }}
            align="center"
          >
            {props.quantidadePendencia !== 0
              ? `${props.quantidadePendencia} DOCUMENTOS PENDENTES`
              : props.situacao === '1' || props.situacao === '3'
              ? 'NENHUM DOCUMENTO PENDENTE'
              : `${props.dataAgendamento} as ${props.horarioAgendamento}`}
          </TableCell>
        ) : null}
        {/* Define celula da linha referente a segunda coluna da tabela (Enviar Documento) */}
        <TableCell
          align="center"
          sx={{
            display: props.numeroColunas === 3 ? 'null' : 'grid',
            width: props.numeroColunas === 3 ? '30% !important' : '100%',
            justifyContent: props.numeroColunas === 3 ? 'null' : 'end',
          }}
        >
          <Box>
            {/* As ações do botão são: exibe Colapse (caso documento já enviado) ou exibe modais para envio de documento (caso documento pendente) */}
            <Button
              onClick={
                (props.situacao === '4' && props.numeroColunas === 2) ||
                (props.situacao === '2' && props.numeroColunas === 2)
                  ? () => setOpenModal(!openModal)
                  : props.numeroColunas === 2
                  ? () => {
                      setOpenEnvioArquivo(true)
                    }
                  : () => {
                      window.location.href = `atendimentos/${props.numero}`
                    }
              }
              sx={estiloBotao().sxBotao}
            >
              <Typography sx={estiloBotao().sxTexto}>
                {estiloBotao().texto}
              </Typography>
            </Button>
          </Box>

          {/* Botão condicional que só aparece quando enviar o documento não é obrigatório. Abre a modal "não tenho" */}
          {(props.situacao === '1' && props.numeroColunas === 2) ||
          (props.situacao === '3' && props.numeroColunas === 2) ? (
            <Button
              onClick={() => {
                setOpenNaotenho(true)
              }}
              sx={estiloBotao(true).sxBotao}
            >
              <Typography sx={estiloBotao().sxTexto}>
                {estiloBotao(true).texto}
              </Typography>
            </Button>
          ) : null}
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
            nomeEnvioDocumento: props.nome,
            tipoModal: 'envio',
            handleValue: openEnvioArquivo,
            handleAction: setOpenEnvioArquivo,
            situacao: props.situacao,
            dataEnviado: props.dataEnviado,
            dadoRecusa: props.dadoRecusa ? props.dadoRecusa : null,
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
            nomeEnvioDocumento: props.nome,
            tipoModal: 'nao tenho',
            handleValue: openNaotenho,
            handleAction: setOpenNaotenho,
            situacao: props.situacao,
            dataEnviado: props.dataEnviado,
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
            nomeEnvioDocumento: props.nome,
            tipoModal: 'info',
            handleValue: openModal,
            handleAction: setOpenModal,
            situacao: props.situacao,
            dataEnviado: props.dataEnviado,
          }}
        ></ModalEnvioDocumento>
      </Dialog>
    </>
  )
}
