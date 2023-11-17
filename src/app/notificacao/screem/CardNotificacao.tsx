import React, { ReactNode } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

interface Props {
  children: ReactNode
}

export default function CardNotificacao({ children }: Props) {
  return (
    <Card sx={{ width: '100%', mt: 4, marginX: 4, paddingX: 4, paddingTop: 2 }}>
      {children}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Olá,dyggfjdsfdsjkfhkjdfhfhdfhfsdfhkdsfhsdkfhsdkfhfkhfkjsjkvnkvnmkapçwoiruhfjdbfvsvtgvcncbmshjdfgdhjfvsg
        </Typography>
      </CardContent>
      <CardActions>
        <Divider />
        <Button size="medium">Todas as notificações</Button>
      </CardActions>
    </Card>
  )
}
