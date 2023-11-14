// Third party
import { Box, Grid } from '@mui/material'
// Internal
import { CardAvatar } from '../../components/CardAvatar'
import { CardDocumentoEnvio } from '../../components/CardDocumentoEnvio'
import { CardeProcesso } from '../../components/CardProcesso'
import PreAgendamento from '../../components/PreAgendamento'

export function DetalhesAtendimento() {
  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      justifyItems={'center'}
      alignContent={'center'}
      mt={3}
      px={1}
    >
      <Grid
        width={'100%'}
        container
        rowSpacing={3}
        columnSpacing={3}
        display={'flex'}
        justifyContent={'center'}
        justifyItems={'center'}
        alignContent={'center'}
        alignItems={{ xs: 'center', sm: 'center', md: 'flex-start' }}
        flexWrap={'wrap'}
      >
        <Grid
          container
          item
          flexDirection={'column'}
          flexWrap={'wrap'}
          xs={12}
          sm={12}
          lg={8}
          rowGap={3}
          sx={{ display: 'flex' }}
        >
          <Grid item lg={12}>
            <PreAgendamento />
          </Grid>
          <Grid item lg={12}>
            <CardDocumentoEnvio />
          </Grid>
        </Grid>
        <Grid
          container
          item
          flexDirection={'column'}
          flexWrap={'wrap'}
          sx={{ display: 'flex' }}
          rowGap={3}
          lg={4}
          xs={12}
          sm={12}
        >
          <Grid item xs={12}>
            <CardAvatar />
          </Grid>
          <Grid item xs={12}>
            <CardeProcesso />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
