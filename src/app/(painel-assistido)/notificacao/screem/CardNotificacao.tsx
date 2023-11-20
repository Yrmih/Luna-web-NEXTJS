import { Box, Divider } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function CardNotificacao({ children }: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 4,
        margin: 0,
        padding: 0,
      }}
    >
      {children}
      <Box sx={{ with: '100%', boxShadow: 6, margin: 0, padding: 0 }}>
        <Divider
          sx={{
            boxShadow: 1,
            my: 1,
            width: '100%',
            display: 'flex',
          }}
          variant="fullWidth"
        />
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Olá,dyggfjdsfdsjkfhkjdfhfhdfhfsdfhkdsfhsdkfhsdkfhfkhfkjsjkvnkvnmkapçwoiruhfjdbfvsvtgvcncbmshjdfgdhjfvsg
          Olá,dyggfjdsfdsjkfhkjdfhfhdfhfsdfhkdsfhsdkfhsdkfhfkhfkjsjkvnkvnmkapçwoiruhfjdbfvsvtgvcncbmshjdfgdh
          Olá,dyggfjdsfdsjkfhkjdfhfhdfhfsdfhkdsfhsdkfhsdkfhfkhfkjsjkvnkvnmkapçwoiruhfjdbfvsvtgvcncbmshjdfgdh
          Olá,dyggfjdsfdsjkfhkjdfhfhdfhfsdfhkdsfhsdkfhsdkfhfkhfkjsjkvnkvnmkapçwoiruhfjdbfvsvtgvcncbmshjdfgdh
          Olá,dyggfjdsfdsjkfhkjdfhfhdfhfsdfhkdsfhsdkfhsdkfhfkhfkjsjkvnkvnmkapçwoiruhfjdbfvsvtgvcncbmshjdfgdh
        </Typography>
      </CardContent>
      <CardActions>
        <Divider />
        <Button size="medium">Todas as notificações</Button>
      </CardActions>
    </Box>
  )
}
