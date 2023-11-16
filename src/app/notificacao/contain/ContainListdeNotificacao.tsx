import { Box, Container } from '@mui/material'
import { ListNotificar } from '../components/ListadeNotificar'

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
      <ListNotificar />
    </Box>
  )
}
