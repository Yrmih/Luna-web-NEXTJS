'use client'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material'

import React, { ChangeEvent, useState } from 'react'
import { BoxPergunta } from './components/BoxPergunta'

export default function NovoAtendimento() {
  const opcoesLocalAtendimento = [
    {
      value: 'default',
      label: 'Selecione um Local de Atendimento',
    },
    {
      value: 'vitoria',
      label: 'Vitoria',
    },
    {
      value: 'vila-velha',
      label: 'Vila Velha',
    },
  ]

  const opcoesAreaDoDireito = [
    {
      value: 'default',
      label: 'Selecione uma área',
    },
    {
      value: 'familia',
      label: 'Família',
    },
  ]

  const opcoesPrioridade = [
    {
      value: 'default',
      label: 'Selecione uma Opção',
    },
    {
      value: 'prioridade1',
      label: '80 Anos ou mais ',
    },
    {
      value: 'prioridade2',
      label: '60 Anos ou mais ',
    },
    {
      value: 'prioridade3',
      label: 'PCD',
    },
  ]

  const opcoesAssunto = [
    {
      value: 'default',
      label: 'Selecione um assunto',
    },
    {
      value: 'acao-alienacao-parental',
      label: 'AÇÃO DE ALIENAÇÃO PARENTAL',
    },
    {
      value: 'acao-alimentos',
      label: 'AÇÃO DE ALIMENTOS',
    },
    {
      value: 'acao-alienacao-compartilhada',
      label: 'AÇÃO DE GUARDA COMPARTILHADA',
    },
  ]
  const opcoesMeioAtendimento = [
    {
      value: 'whatsapp',
      label: 'Via ligação ou WhatsApp',
    },
    {
      value: 'presencial',
      label: 'Atendimento Presencial',
    },
  ]

  const [value, setValue] = useState('nao')

  const handleChangeOpcaoIntimacao = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const [value2, setValue2] = useState('nao')

  const handleChangeOpcaoPrioridade = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setValue2((event.target as HTMLInputElement).value)
  }

  const [valorAssunto, setValorAssunto] = useState('default')

  const handleAssuntoChange = (e: { currentTarget: { value: string } }) => {
    const assunto = e.currentTarget.value

    setValorAssunto(assunto)
  }

  const [valorArea, setValorArea] = useState('default')

  const handleAreaChange = (e: { currentTarget: { value: string } }) => {
    const area = e.currentTarget.value

    setValorArea(area)
  }

  const [valorLocalAtendimento, setValorLocalAtendimento] = useState('default')

  const handleLocalAtendimentoChange = (e: {
    currentTarget: { value: string }
  }) => {
    const area = e.currentTarget.value

    setValorLocalAtendimento(area)
  }

  return (
    <>
      <Box
        sx={{
          p: 0,
          m: 0,
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 0,
            m: 0,
          }}
        >
          <Box
            color="white"
            fontWeight={600}
            fontSize={'1.5rem'}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.primary.main
                  : '#171717',
              paddingTop: '8vh',
              paddingLeft: '5vh',
              width: '100%',
              height: '25vh',
            }}
          >
            Novo Atendimento
          </Box>
          <Stack
            direction={'column'}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? 'white' : '#1b1b1b',
              padding: '2vh',
              paddingBottom: '10vh',

              alignItems: 'center',
              boxShadow: 2,
              borderRadius: '3vh',
              marginTop: '-8vh',
              marginBottom: '4vh',
              width: '95%',
            }}
          >
            {' '}
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50vw' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="local-atendimento"
                select
                label="Local de Atendimento"
                defaultValue={valorLocalAtendimento}
                SelectProps={{
                  native: true,
                }}
                variant="filled"
                onChange={handleLocalAtendimentoChange}
              >
                {opcoesLocalAtendimento.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50vw' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="area-do-direito"
                select
                label="Área do Direito"
                defaultValue={valorArea}
                SelectProps={{
                  native: true,
                }}
                variant="filled"
                onChange={handleAreaChange}
              >
                {opcoesAreaDoDireito.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50vw' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="assunto"
                select
                label="Assunto"
                value={valorAssunto}
                disabled={valorArea === 'default'}
                onChange={handleAssuntoChange}
                SelectProps={{
                  native: true,
                }}
                variant="filled"
              >
                {opcoesAssunto.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box
              sx={{ mt: '4vh' }}
              flexDirection={'column'}
              display={valorAssunto !== 'default' ? 'flex' : 'none'}
            >
              <BoxPergunta
                props={{
                  pergunta: 'Informe o endereço completo da parte contrária.',
                }}
              />
              <BoxPergunta
                props={{
                  pergunta: 'Informe o seu contato que possui whatsapp.',
                }}
              />
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50vw' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-static"
                label="Descreva o seu caso"
                multiline
                rows={8}
              />
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50vw' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="meio-atendimento"
                select
                label="Como você gostaria de ser atendido?"
                defaultValue="whatsapp"
                SelectProps={{
                  native: true,
                }}
                variant="filled"
              >
                {opcoesMeioAtendimento.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50vw' },
              }}
              display="flex"
              alignItems={'start'}
            >
              <FormControl sx={{ width: '50vw' }}>
                <FormLabel id="intimacao">
                  Recebeu Intimação ou algum documento da justiça?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="intimacao"
                  name="intimacao"
                  value={value}
                  onChange={handleChangeOpcaoIntimacao}
                >
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box
              sx={{ width: '50vw' }}
              display={value === 'sim' ? 'flex' : 'none'}
              flexDirection={'column'}
            >
              Dados da intimação
              <TextField
                id="input-processo"
                fullWidth
                label="Número de Processo"
                variant="standard"
                helperText={'Digite o número do seu processo'}
              />
            </Box>
            <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50vw' },
              }}
              display="flex"
              alignItems={'start'}
            >
              <FormControl sx={{ width: '50vw' }}>
                <FormLabel id="prioridade">Atendimento prioritário ?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="prioridade"
                  name="prioridade"
                  value={value2}
                  onChange={handleChangeOpcaoPrioridade}
                >
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box
              sx={{ width: '50vw' }}
              display={value2 === 'sim' ? 'flex' : 'none'}
              flexDirection={'column'}
            >
              <TextField
                id="area-do-direito"
                select
                label="Tipo de Prioridade"
                defaultValue={valorArea}
                SelectProps={{
                  native: true,
                }}
                variant="filled"
                onChange={handleAreaChange}
              >
                {opcoesPrioridade.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box
              sx={{
                justifyContent: 'flex-end',
                display: 'flex',
                width: '100%',
              }}
            >
              <Button
                sx={{
                  marginRight: '14vw',
                  width: '17vw',

                  '@media (min-width:900px)': {
                    width: '12vw',
                  },
                  '@media (min-width:1100px)': {
                    width: '9vw',
                  },
                  marginTop: '3vh',
                  mb: '2vh',

                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#023B7E' : '#2d2d2d',
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light' ? '#005bc9' : '#757575',
                  },
                }}
                variant="contained"
                onClick={() => {
                  window.location.href = '/confirmacao-solicitacao'
                }}
              >
                Agendar
              </Button>
            </Box>
          </Stack>
        </Paper>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}> </Box>
      </Box>
    </>
  )
}
