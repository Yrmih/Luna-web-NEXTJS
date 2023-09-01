'use client';

import Copyright from '@/components/Copyright';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import InformacaoInicial from './components/formulario/InfirmacaoInicial';
import Contato from './components/formulario/Contato';
import Endereco from './components/formulario/Endereco';
import DadosPessoais from './components/formulario/DadosPessoais';
import QualificacaoFinanceira from './components/formulario/QualificacaoFinanceira';


const steps = [
    { 
      nome:"Informações iniciais", 
      descricao: "Preencha com as suas informações necessárias para solicitação do agendamento."
    },
    {
      nome:"Contato",
      descricao: "Preencha com as informações para contato"
    },
    {
      nome:"Endereço",
      descricao: "Preencha com seus Endereços."
    },
    {
      nome:"Dados Pessoais",
      descricao: "Preencha com seus dados."
    },
    {
      nome:"Qualificação financeira",
      descricao: "Preencha com as informações necessárias para a sua qualificação financeira."
    },
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <InformacaoInicial/>;
    case 1:
      return <Contato />;
    case 2:
      return <Endereco />;
    case 3:
        return <DadosPessoais />;
    case 4:
        return <QualificacaoFinanceira />;
    default:
      throw new Error('Unknown step');
  }
}

export default function CadastroAssistido() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
        <Container component="main" maxWidth="lg" sx={{ mb: 4}}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, boxShadow: 6, borderRadius: 6 }}>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
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
              <Typography component="h3" variant='inherit' align='center' pt={3} pb={5}>
                {steps[activeStep].descricao}
              </Typography>
            </Box>
              {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                <Button 
                  onClick={handleBack}
                  sx={{ mt: 8, mr: 3 }}
                >
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
    </React.Fragment>
  );
}