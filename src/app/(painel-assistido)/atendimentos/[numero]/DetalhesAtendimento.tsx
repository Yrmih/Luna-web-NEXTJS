'use client'
// Third party
import { Box, Grid } from '@mui/material'
// Internal
import { CardAvatar } from '../../components/CardAvatar'
import { CardDocumentoEnvio } from '../../components/CardDocumentoEnvio'
import { CardeProcesso } from '../../components/CardProcesso'
import PreAgendamento from '../../components/PreAgendamento'

export function DetalhesAtendimento() {
  return (
    // Container principal (dispõe dos itens da página)
    <Grid
      container
      sx={{
        marginTop: '10px',
        width: '100%', // O width segue o tamanho disposto para <main> do layout
      }}
    >
      {/* Apresenta: Detalhes do atendimento / documentos pendentes */}
      <Grid
        item
        lg={8}
        md={8}
        sm={12}
        xs={12}
        sx={{
          paddingLeft: '2vw',
          paddingRight: '2vw',
          paddingBottom: '15px',
        }}
      >
        {/* Box da margin de um componente para o outro */}
        <Box
          sx={{
            marginBottom: '15px',
          }}
        >
          {/* Componente que trás dados do pré agendamento */}
          <PreAgendamento />
        </Box>
        {/* Componente que trás dados dos documentos do atendimento */}
        <CardDocumentoEnvio />
      </Grid>

      {/* Detalhes do assistido */}
      <Grid
        item
        lg={4}
        md={4}
        sm={12}
        xs={12}
        sx={{
          paddingTop: '15px',
          paddingBottom: '15px',
          paddingLeft: '2vw',
          paddingRight: '2vw',
        }}
      >
        {/* Box da margin de um componente para o outro */}
        <Box
          sx={{
            marginBottom: '15px',
          }}
        >
          {/* Componente que trás dados do perfil do assistido */}
          <CardAvatar />
        </Box>
        {/* Componente que trás dados de processos do assistido */}
        <CardeProcesso />
      </Grid>
    </Grid>
  )
}
