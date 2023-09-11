// Third party
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

// Framework
import Image from 'next/image'

const BUTTONS_LINKS = [
  {
    name: 'ver status da solicitação',
    link: '/agendamento/historico/[numero]',
  },
  { name: 'editar solicitação', link: '/agendamento/[numero]' },
]

export function MediaCard({
  heading,
  text,
}: {
  heading: string
  text: string
}) {
  return (
    <Card>
      <Image
        alt="Random image"
        src="https://source.unsplash.com/random"
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        {BUTTONS_LINKS.map((item) => (
          <Button key={item.name} href={item.link} size="small">
            {item.name}
          </Button>
        ))}
      </CardActions>
    </Card>
  )
}
