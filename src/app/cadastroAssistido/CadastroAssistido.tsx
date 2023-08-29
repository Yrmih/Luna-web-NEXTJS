'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FormularioEnderesso from './components/FormularioEnderesso';
import FormularioQualificacaoFinanceira from './components/FormularioQualificacaoFinanceira';
import FormularioInformacaoInicial from './components/FormularioInfirmacaoInicial';
import FormularioContato from './components/FormularioContato';
import FormularioDadosBasicos from './components/FormularioDadosBasicos';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Equipe DPE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = [
    'Informações iniciais', 
    'Contato', 
    'Enderesso',
    'Dados básicos',
    'Qualificação financeira'
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <FormularioInformacaoInicial/>;
    case 1:
      return <FormularioContato />;
    case 2:
      return <FormularioEnderesso />;
    case 3:
        return <FormularioDadosBasicos />;
    case 4:
        return <FormularioQualificacaoFinanceira />;
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
        <AppBar
            position="absolute"
            sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        >
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Cadastro do Assistido
            </Typography>
            </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="md" sx={{ mb: 4, boxShadow: 3 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <Typography component="h1" variant="h4" align="center">
                Cadastro do Assistido
            </Typography>
            {activeStep === steps.length ? (
                <React.Fragment>
                <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order has
                    shipped.
                </Typography>
                </React.Fragment>
            ) : (
                <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                    </Button>
                    )}
                    <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                </Box>
                </React.Fragment>
            )}
            </Paper>
        </Container>
        <Copyright />
    </React.Fragment>
  );
}