// Thier party
import { Box } from '@mui/material'

// Inernal

import { TableNotificar } from './TableNotificar'
import mockDataNotificar from '../../mocks/TableNotificarMock'

const rows = mockDataNotificar

export function ListaDeNotificacao() {
  return (
    <Box
      sx={{
        mb: 4,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TableNotificar createData={rows} />
    </Box>
  )
}
