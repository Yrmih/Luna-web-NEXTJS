'use client'

// Third party
import {
  Box,
  Button,
  Container,
  MobileStepper,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'

// Framework
import { useState } from 'react'

// Internal
import { DadosPessoais } from './components/formulario/DadosPessoais'
import { QualificacaoFinanceira } from './components/formulario/QualificacaoFinanceira'
import { Contato } from './components/formulario/Contato'
import { Endereco } from './components/formulario/Endereco'
import { InformacaoInicial } from './components/formulario/InfirmacaoInicial'
import { Copyright } from '@/components/Copyright'

const steps = [
  {
    nome: 'Informações iniciais',
    descricao:
      'Preencha com as suas informações necessárias para solicitação do agendamento.',
  },
  {
    nome: 'Contato',
    descricao: 'Preencha com as informações para contato',
  },
  {
    nome: 'Endereço',
    descricao: 'Preencha com seus Endereços.',
  },
  {
    nome: 'Dados Pessoais',
    descricao: 'Preencha com seus dados.',
  },
  {
    nome: 'Qualificação financeira',
    descricao:
      'Preencha com as informações necessárias para a sua qualificação financeira.',
  },
]

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <InformacaoInicial />
    case 1:
      return <Contato />
    case 2:
      return <Endereco />
    case 3:
      return <DadosPessoais />
    case 4:
      return <QualificacaoFinanceira />
    default:
      throw new Error('Unknown step')
  }
}

export function CadastroAssistido() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          boxShadow: 6,
          borderRadius: 6,
        }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{ pt: 3, pb: 5, display: { xs: 'none', sm: 'flex' } }}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label.nome}>
              <StepLabel>{label.nome}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box my={8}>
          <Typography component="h1" variant="h4" align="center">
            {steps[activeStep].nome}
          </Typography>
          <Typography
            component="h3"
            variant="inherit"
            align="center"
            pt={3}
            pb={5}
          >
            {steps[activeStep].descricao}
          </Typography>
        </Box>
        {getStepContent(activeStep)}
        <MobileStepper
          sx={{ mt: 10, borderRadius: 4, display: { xs: 'flex', sm: 'none' } }}
          variant="dots"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Voltar
            </Button>
          }
        />
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'flex-end',
          }}
        >
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mt: 8, mr: 3 }}>
              voltar
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 8, mr: 3 }}
          >
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Proximo'}
          </Button>
        </Box>
      </Paper>
      <Copyright />
    </Container>
  )
}
