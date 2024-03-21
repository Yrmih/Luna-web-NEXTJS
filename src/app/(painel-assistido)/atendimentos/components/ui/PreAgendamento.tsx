'use client'

// Third party
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  useTheme,
} from '@mui/material'
import { BarradeProgresso } from './BarradeProgresso'

// Internal

interface PreAgendamentoProps {
  props: {
    tipoAtendimento: string
  }
}

export function PreAgendamento({ props }: PreAgendamentoProps) {
  const theme = useTheme()
  return (
    <Grid
      container
      component={Paper}
      elevation={3}
      sx={{
        width: '100%',
        boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)', // Adicione o sombreamento
        borderRadius: '3vh', // Adicione a borda arredondada
      }}
    >
      <Grid item sx={{ width: '100%' }}>
        <Card sx={{ borderRadius: '3vh', p: 4 }}>
          {props.tipoAtendimento === 'Pré-agendamento' ? (
            <BarradeProgresso props={{ valor: 10 }} />
          ) : (
            <CardHeader
              sx={{
                backgroundColor: theme.palette.primary.light,
                height: '10px',
                borderRadius: '3vh',
                textAlign: 'center',
              }}
              title={'Pré-agendamento'}
            ></CardHeader>
          )}

          <ListItem>
            <ListItemText primary="ATENÇÃO: Fotografe ou anexe os documentos pendentes e listados abaixo, ou declare que não os possui. Certifique-se de que todas as perguntas foram respondidas. Acompanhe por aqui o andamento da sua demanda e por e-mail, caso tenha sido cadastrado." />
          </ListItem>
          <CardContent sx={{ padding: 0 }}>
            <List sx={{ padding: 0 }}>
              <ListItem>
                <ListItemText primary="Assunto: AÇÃO DE ALIMENTOS" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Área: Cível" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
