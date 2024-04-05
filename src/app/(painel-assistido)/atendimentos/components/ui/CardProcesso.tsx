// Third party
import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'

export function CardProcesso() {
  return (
    <Box
      sx={{
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        display: 'flex',
        rowGap: 3,
      }}
    >
      <Card
        component={Paper}
        sx={{
          width: '100%',
          p: 4,
          boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)', // Adicione o sombreamento
          borderRadius: '3vh', // Adicione a borda arredondada
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <List sx={{ width: '100%' }}>
          <ListItem disableGutters>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <IconButton edge="end" aria-label="comment">
                <DescriptionIcon />
              </IconButton>
            </Box>
            <ListItemText primary={0} secondary={`Processos`} sx={{ pr: 2 }} />
          </ListItem>
        </List>
      </Card>
      <Card
        component={Paper}
        sx={{
          width: '100%',
          p: 4,
          boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)', // Adicione o sombreamento
          borderRadius: '3vh', // Adicione a borda arredondada
        }}
      >
        <Typography>Interessados</Typography>
        <List sx={{ width: '100%' }}>
          <ListItem disableGutters>
            <ListItemText primary={`Nome do interessado`} />
          </ListItem>
        </List>
      </Card>
    </Box>
  )
}
