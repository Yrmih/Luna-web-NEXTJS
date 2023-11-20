import { Box } from '@mui/material'
import { TableNotificar } from '../screem/TableNotificar'
import mockDataNotificar from '../Mock/TableNotificarMock'

// Mock data
// const rows: TableNotificarModulo[] = []
const rows = mockDataNotificar

export default function ContainListdeNotificacao() {
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
