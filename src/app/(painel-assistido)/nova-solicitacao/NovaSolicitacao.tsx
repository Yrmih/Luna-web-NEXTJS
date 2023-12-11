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

import React from 'react'
import BoxPergunta from '../components/BoxPergunta'

export default function NovaSolicitacao() {
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

  const [valorIntimacao, setValorIntimacao] = React.useState('')
  const [value, setValue] = React.useState('nao')

  const handleIntimacaoChange = (e: { currentTarget: { value: any } }) => {
    const intimacao = e.currentTarget.value

    setValorIntimacao(intimacao)
  }
  const handleChangeOpcaoIntimacao = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const [valorAssunto, setValorAssunto] = React.useState('default')

  const handleAssuntoChange = (e: { currentTarget: { value: any } }) => {
    const assunto = e.currentTarget.value

    setValorAssunto(assunto)
  }

  const [valorArea, setValorArea] = React.useState('default')

  const handleAreaChange = (e: { currentTarget: { value: any } }) => {
    const area = e.currentTarget.value

    setValorArea(area)
  }

  const [valorLocalAtendimento, setValorLocalAtendimento] =
    React.useState('default')

  const handleLocalAtendimentoChange = (e: {
    currentTarget: { value: any }
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
            Nova Solicitação
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
                <FormLabel id="intimacao">Existe Intimação ?</FormLabel>
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
          </Stack>
        </Paper>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          {' '}
          <Button
            sx={{
              marginRight: '2vw',
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
            href="/confirmacao-solicitacao"
          >
            Agendar
          </Button>
        </Box>
      </Box>
    </>
  )
}
