// Thier party
import { Box } from '@mui/material'

// Inernal
import mockDataNotificar from '../../detalhes/mocks/TableNotificarMock'
import { TableNotificar } from './TableNotificar'

const rows = mockDataNotificar

export function ContainListdeNotificacao() {
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
