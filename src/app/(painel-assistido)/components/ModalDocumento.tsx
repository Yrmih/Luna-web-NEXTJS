'use client'

// Third party
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Box,
  Typography,
  keyframes,
  DialogActions,
  Dialog,
  useMediaQuery,
} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import PendingIcon from '@mui/icons-material/Pending'

// Framework
import React, { Dispatch, SetStateAction, useState } from 'react'

// Animação de alerta
const shake = keyframes`
  0% { transform: translate(0px, 0px) rotate(0deg); }
  10% { transform: translate(-5px, 0px) rotate(-2.5deg); }
  20% { transform: translate(5px, 0px) rotate(2.5deg); }
  30% { transform: translate(-5px, 0px) rotate(-2.5deg); }
  40% { transform: translate(5px, 0px) rotate(2.5deg); }
  50% { transform: translate(0px, 0px) rotate(0deg); }
  60% { transform: translate(-5px, 0px) rotate(-2.5deg); }
  70% { transform: translate(5px, 0px) rotate(2.5deg); }
  80% { transform: translate(-5px, 0px) rotate(-2.5deg); }
  90% { transform: translate(5px, 0px) rotate(2.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
  `

// Define tipos da proriedade da ModalEnvioDocumento
interface ModalEnvioDocumentoProps {
  props: {
    nomeEnvioDocumento?: string
    tipoModal?: string
    handleValue?: boolean
    handleAction: Dispatch<SetStateAction<boolean>>
  }
}

export default function ModalEnvioDocumento({
  props,
}: ModalEnvioDocumentoProps) {
  // ! Atualiza a situação do Arquivo podendo ser "pendente", "erro" e null
  const situacaoArquivo = 'pendente'

  // ! State para verificar se requisito de leitura da modal foi realizado
  const [estadoBotao, setEstadoBotao] = useState<boolean>(false)
  // ! State para tremer o botão (chamar atenção) do requisito de leitura da modal
  const [tremendo, setTremendo] = useState(false)

  const [openModeloDocumento, setOpenModeloDocumento] = useState(false)
  const [openModeloFoto, setOpenModeloFoto] = useState(false)

  const handleClique = () => {
    // ! Quando o botão é clicado, alternamos o estado para acionar a animação de tremor
    setTremendo(true)
    setTimeout(() => {
      setTremendo(false)
    }, 500) // ! Garante o tempo para execução completa da animação
  }
  const matches = useMediaQuery('(min-width:900px)')
  return (
    <>
      {/* Titulo da modal */}
      <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {props.tipoModal === 'nao tenho' ? 'ATENÇÃO' : 'ENVIO DE DOCUMENTO'}
      </DialogTitle>

      {/* Conteúdo da modal */}
      <DialogContent sx={{ alignContent: 'center', alignitems: 'center' }}>
        {props.tipoModal === 'nao tenho' ? (
          // ! Conteúdo de texto para quando a modal é uma "não tenho"
          <>
            <DialogContentText>
              Você está prestes a declarar que não possui esse documento, tem
              certeza que deseja continuar?
            </DialogContentText>
            <Box
              display="flex"
              justifyContent={'space-evenly'}
              alignItems={'center'}
              mt={'10px'}
            >
              <Button
                sx={{
                  fontSize: matches ? '1rem' : '0.75rem',
                  animation: tremendo ? `${shake} 1s ease-in-out` : 'none',

                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light' ? '#005bc9' : '#757575',
                  },
                }}
                variant="contained"
                onClick={() => {
                  setEstadoBotao(!estadoBotao)
                }}
              >
                <CheckBoxOutlineBlankIcon
                  sx={{ display: estadoBotao ? 'none' : 'flex', mr: '1vw' }}
                />
                <CheckBoxIcon
                  sx={{ display: estadoBotao ? 'flex' : 'none', mr: '1vw' }}
                />
                Li e entendi que enviar os documentos é obrigatório
              </Button>
            </Box>
          </>
        ) : (
          // ! Conteúdo de texto para quando a modal é uma "enviar" ou "reenviar"
          <>
            <DialogContentText
              sx={{
                textAlign: 'center',
              }}
            >
              {`${props.nomeEnvioDocumento}`}
            </DialogContentText>

            {/* Botões para instrução e carregamento do arquivo */}
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              mb={'10px'}
              mt={'10px'}
            >
              {props.nomeEnvioDocumento === 'declaração de residência' ||
              props.nomeEnvioDocumento === 'declaração de hiposuficiência' ? (
                <Button
                  sx={{
                    animation: tremendo ? `${shake} 1s ease-in-out` : 'none',
                    mr: '5px',
                    mb: '5px',
                    color: 'white',
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  onClick={() => {
                    !estadoBotao
                      ? (() => {
                          setEstadoBotao(!estadoBotao)
                          setOpenModeloDocumento(true)
                        })()
                      : setOpenModeloDocumento(true)
                  }}
                >
                  MODELO DE DOCUMENTO PARA ENVIO
                </Button>
              ) : null}
              <Button
                sx={{
                  mr: '5px',
                  mb: '5px',
                  color: 'white',
                  bgcolor: '#023B7E',
                  '&:hover': {
                    backgroundColor: '#005bc9',
                  },
                }}
                onClick={() => {
                  setOpenModeloFoto(true)
                }}
              >
                COMO TIRAR FOTO DO DOCUMENTO ?
              </Button>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  border: '1px solid black',
                  borderRadius: '10px',
                }}
              >
                <Button
                  sx={{
                    mr: '5px',
                    color: 'white',
                    bgcolor: '#023B7E',
                    '&:hover': {
                      backgroundColor: '#005bc9',
                    },
                  }}
                  onClick={() => {
                    !estadoBotao
                      ? handleClique()
                      : props.handleAction(!props.handleValue)
                  }}
                >
                  CARREGAR ARQUIVOS
                </Button>
                {situacaoArquivo === 'pendente' ? (
                  <PendingIcon sx={{ color: 'grey', fontSize: '2rem' }} />
                ) : situacaoArquivo === 'erro' ? (
                  <CancelIcon sx={{ color: 'red', fontSize: '2rem' }} />
                ) : (
                  <CheckCircleIcon sx={{ color: 'green', fontSize: '2rem' }} />
                )}
                <Typography
                  sx={{ ml: '5px', fontSize: matches ? '1rem' : '0.75rem' }}
                >
                  {situacaoArquivo === 'pendente'
                    ? 'Arquivo pendente de envio...'
                    : situacaoArquivo === 'erro'
                      ? 'Ocorreu um erro com seu arquivo'
                      : 'Arquivo carregado com sucesso! Clique em enviar para finalizar o envio do eu arquivo'}
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </DialogContent>

      {/* Ações da modal Confirmar / Enviar / Cancelar */}
      {props.tipoModal !== 'nao tenho' ? (
        <DialogActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            sx={{
              color: 'white',
              bgcolor: 'darkgreen',
              '&:hover': {
                backgroundColor: 'green',
              },
            }}
            onClick={() => {
              console.log(estadoBotao)
              !estadoBotao
                ? handleClique()
                : props.handleAction(!props.handleValue)
            }}
          >
            Enviar Arquivo
          </Button>
          <Button
            sx={{
              color: 'white',
              bgcolor: 'red',
              '&:hover': {
                backgroundColor: '#fd3131',
              },
            }}
            onClick={() => {
              props.handleAction(!props.handleValue)
            }}
          >
            Cancelar
          </Button>
        </DialogActions>
      ) : (
        <DialogActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            sx={{
              color: 'white',
              bgcolor: 'darkgreen',
              '&:hover': {
                backgroundColor: 'green',
              },
            }}
            onClick={() => {
              !estadoBotao
                ? handleClique()
                : props.handleAction(!props.handleValue)
            }}
          >
            Confirmar
          </Button>
          <Button
            sx={{
              color: 'white',
              bgcolor: 'red',
              '&:hover': {
                backgroundColor: '#fd3131',
              },
            }}
            onClick={() => {
              props.handleAction(!props.handleValue)
            }}
          >
            Cancelar
          </Button>
        </DialogActions>
      )}
      <Dialog
        open={openModeloDocumento}
        onClose={() => {
          setOpenModeloDocumento(false)
        }}
      >
        <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          {' '}
          {props.nomeEnvioDocumento?.toUpperCase()}
        </DialogTitle>
        {props.nomeEnvioDocumento === 'declaração de residência' ? (
          <DialogContent>
            <p>
              Caso não tenha comprovante de residência em seu nome, faça a
              seguinte declaração a próprio punho ou de forma impressa e anexe.
              Em ambos os casos deve conter a sua assinatura igual à do seu
              documento:
            </p>
            <p> DECLARAÇÃO DE RESIDÊNCIA </p>
            <p>
              Eu,___________________________________;
              CPF:________________________; Profissão: ____________________;
              Estado Civil ___________________. Declaro que resido na
              rua/avenida _________________________ Nº:_____ Bairro ________;
              Cidade: _______________ CEP _______________ Estado: _______, Ponto
              de referência _______________________.
            </p>
            <p>
              Por ser verdade, dato e assino o presente documento, declarando
              estar ciente de que responderei criminalmente em caso de falsidade
              das informações aqui prestadas.
            </p>
            <p>________________, _____/____/___. </p>
            Local e Data
            <p>________________________________________.</p>
            Assinatura do Declarante
            <br></br>
          </DialogContent>
        ) : props.nomeEnvioDocumento === 'declaração de hiposuficiência' ? (
          <DialogContent>
            {
              <>
                <p>
                  Os serviços da Defensoria Pública são para pessoas
                  “hipossuficientes”, ou seja, pessoas que não possuem condições
                  de pagar as custas, despesas ou honorários para entrar com
                  ação na justiça.
                </p>
                <p>
                  Caso você entenda que seja pessoa hipossuficiente, pedimos que
                  escreva de próprio punho ou faça de forma impressa uma
                  declaração de hipossuficiência.
                </p>
                <p>
                  Você deverá escrever nessa Declaração seu nome completo,
                  endereço, RG, CPF, sua assinatura igual à do documento e
                  datar. A Declaração deve conter além dos seus dados o texto
                  abaixo:
                </p>
                <p>
                  Declaro que desejo ser assistido pela Defensoria Pública do
                  Estado do Espírito Santo para representar meus interesses,
                  judicial e extrajudicialmente, bem como a ausência de
                  condições para pagar as custas do processo e os honorários de
                  advogado sem prejuízo próprio ou de minha família, e ciente de
                  que, em caso de falsidade desta declaração, ficarei sujeito(a)
                  às sanções previstas na legislação em vigor, inclusive a de
                  natureza penal.
                </p>
              </>
            }
          </DialogContent>
        ) : null}
        <DialogActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {' '}
          <Button
            sx={{
              color: 'white',
              bgcolor: 'grey',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
            onClick={() => {
              setOpenModeloDocumento(false)
            }}
          >
            fechar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openModeloFoto}
        onClose={() => {
          setOpenModeloFoto(false)
        }}
      >
        <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          {' '}
          COMO TIRAR FOTO DO DOCUMENTO ?
        </DialogTitle>

        <DialogContent>
          <p>
            Siga as orientações de como tirar as fotos dos documentos que
            constarão em seu processo judicial:
          </p>
          <p>
            1º: Coloque os documentos num local com claridade e em superfície
            plana.
          </p>
          <p>2º: Limpe a câmera do seu aparelho.</p>
          <p>3º: Desative o flash da câmera.</p>
          <p>4º: Centralize a câmera no documento.</p>
          <p>
            5º: Tire foto somente dos documentos sem aparecer nada ao redor. O
            arquivo deve conter somente o documento.
          </p>
        </DialogContent>

        <DialogActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {' '}
          <Button
            sx={{
              color: 'white',
              bgcolor: 'grey',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
            onClick={() => {
              setOpenModeloFoto(false)
            }}
          >
            fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
