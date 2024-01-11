// Third party
import { Box, CardHeader, Paper } from '@mui/material'

// Internal
import { CardNotificacao } from '../../components/ui/CardNotificacao'
import { CustomSubheader } from '../../components/ui/TableNotificar'

export function DetalhesNotificacao({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <Box
      component={Paper}
      sx={{ mt: 4, marginX: 4, paddingX: 4, paddingTop: 2, borderRadius: 4 }}
    >
      <CardNotificacao>
        <CardHeader
          title={'Notificações'}
          subheader={
            <CustomSubheader
              subheader1={id}
              subheader2={`Data de envio: ${'2023-11-08'}`}
            />
          }
          sx={{ width: '100%', height: '4.125rem' }}
        />
      </CardNotificacao>
    </Box>
  )
}
