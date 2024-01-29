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
  const [openColapse, setOpenColapse] = useState(false)
  const [openEnvioArquivo, setOpenEnvioArquivo] = useState(false)

  /**
   * Função que define o Colapse informativo de cada documento (linha expansiva abaixo do documento para informar a situação dele nos casos de aprovado, em analise e não tenho) A informação nos casos de "reenviado", ou seja, o documento recusado após "analise" é passada dentro da modal ao tentar enviar o arquivo
   */
  const informacaoDocumento = () => {
    let texto
    let exibir = false
    switch (props.situacao) {
      case 'aprovado':
        exibir = true
        texto = `Seu documento foi enviado no dia ${props.dataEnviado} e foi aprovado por nossos atendentes.`
        break
      case 'em analise':
        exibir = true
        texto = `Seu documento foi enviado para no dia ${props.dataEnviado} e está aguardando aprovação de nossos atendentes.`
        break
      case 'nao tenho':
        exibir = true
        texto = `Seu documento foi declarado como 'NÃO TENHO' no dia ${props.dataEnviado}.`
        break
    }
    return { exibir, texto }
  }

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
        <TableCell sx={{ p: '5px' }}>
          <Typography
            sx={{ fontSize: '12px', fontWeight: 'bold', ml: '0.5vw' }}
          >
            {props.nome?.toUpperCase()}
          </Typography>
        </TableCell>
        {/* Define celula da linha referente a segunda coluna da tabela (Enviar Documento) */}
        <TableCell
          align="center"
          sx={{
            width: '13vw !important',
            justifyContent: 'center',
            allingContent: 'center',
            p: '5px',
          }}
        >
          {/* As ações do botão são: exibe Colapse (caso documento já enviado) ou exibe modais para envio de documento (caso documento pendente) */}
          <Button
            onClick={
              informacaoDocumento().exibir
                ? () => setOpenColapse(!openColapse)
                : () => {
                    setOpenEnvioArquivo(true)
                  }
            }
            sx={estiloBotao().sxBotao}
          >
            <Typography sx={estiloBotao().sxTexto}>
              {estiloBotao().texto}
            </Typography>
          </Button>

          {/* Botão condicional que só aparece quando enviar o documento não é obrigatório. Abre a modal "não tenho" */}
          {!props.obrigatorio &&
          (props.situacao === 'reenviar' || props.situacao === 'pendente') ? (
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
            handleValue: openEnvioArquivo,
            handleAction: setOpenEnvioArquivo,
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
          }}
        ></ModalEnvioDocumento>
      </Dialog>
    </>
  )
}
