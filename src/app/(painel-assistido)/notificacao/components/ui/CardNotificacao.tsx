'use client'
import React, { ReactNode } from 'react'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, Divider, useTheme } from '@mui/material'
import Link from 'next/link'

interface ChildrenProps {
  children?: ReactNode
}
// type CardNotificacaoProps = ChildrenProps & TableNotificarModulo;

export function CardNotificacao(props: ChildrenProps) {
  const handlereloading = () => {
    window.location.reload()
  }
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 4,
        margin: 0,
        padding: 0,
      }}
    >
      {props.children}
      <Box sx={{ width: '100%', boxShadow: 6, margin: 0, padding: 0 }}>
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
      <CardContent
        sx={{
          marginBottom: 5,
          mt: 5,
          border: `1px solid ${theme.palette.grey.A100}`, // Adicione a cor da borda desejada
          borderRadius: 4, // Adicione um raio de borda se desejar
          padding: 2, // Adicione preenchimento para afastar o conteúdo da borda
          height: '30vh',
          overflow: 'auto',
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          align="justify"
          sx={{
            wordWrap: 'break-word' /* Quebra de palavras */,
            overflowWrap: 'break-word',
            width: '100%',
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          deserunt mollitia amet, quidem totam repudiandae, at consequuntur
          eaque eum quae accusamus consequatur cum. Nisi, ipsam ut vel velit
          voluptas nam. Culpa id eaque molestias? Ratione repellat possimus eius
          reiciendis quia, rem quas eum minus magni, obcaecati quis, quae
          explicabo quibusdam. Nihil, ipsum quam voluptas libero corporis
          tempora molestiae aperiam aliquam. Quisquam omnis suscipit illum esse
          saepe ea fugit, vitae, quae odio quam nemo, voluptatem at quidem
          fugiat dignissimos expedita totam officia earum? Aperiam corrupti
          nulla praesentium consequuntur porro labore neque. Autem tempore
          voluptates neque eligendi libero consequatur placeat corporis numquam
          fuga natus! Minus eius eveniet quae vero corrupti voluptatum
          voluptates minima distinctio dolorem dignissimos voluptate iusto
          provident, qui dolores voluptatem? In nobis, reprehenderit natus
          inventore labore ullam hic laudantium, at delectus, corrupti dolorum
          assumenda numquam vel incidunt iure aperiam praesentium amet
          consequuntur! Repudiandae et incidunt quia totam, amet repellat
          labore? Voluptatem doloremque esse cum velit pariatur iure omnis
          corrupti facere fugiat quidem dolores amet alias sint, beatae minima
          reprehenderit repellendus quod molestiae dignissimos maxime saepe,
          nesciunt ut? Beatae, cupiditate voluptatum? Adipisci minus fugiat quod
          architecto assumenda aperi const [open, setOpen] =
          React.useState(false)am magnam doloremque! Dolorem obcaecati pariatur
          quam voluptas ut dolor eos totam soluta doloremque quaerat error
          assumenda cum, enim cumque voluptatibus eveniet deserunt sapiente! Ex
          velit voluptates dicta molestias aliquid quae ipsam exercitationem
          iure iusto quos minima nulla nostrum asperiores deserunt quis
          recusandae ipsum impedit, enim magnam sed voluptatum, obcaecati harum,
          laudantium quisquam. Quas? Omnis harum maxime modi aut suscipit neque
          perspiciatis eveniet dignissimos doloribus totam. Recusandae libero
          nesciunt sint inventore nisi nobis, odio rerum et beatae? Eum, aperiam
          laudantium. Officiis necessitatibus vero nulla. Recusandae molestiae
          inventore provident vel laudantium ullam. Ducimus ab similique laborum
          in et. Exercitationem consequatur itaque aut modi a cum saepe porro
          aspernatur debitis aliquam. A in autem mollitia ipsa?
        </Typography>
      </CardContent>
      <Divider
        sx={{
          boxShadow: 1,
          my: 1,
          width: '100%',
          display: 'flex',
          marginTop: 2,
        }}
        variant="fullWidth"
      />

      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          LinkComponent={Link}
          onClick={() => {
            window.location.href = `/notificacao`
          }}
          size="medium"
        >
          Todas as notificações
        </Button>
        <Button LinkComponent={Link} onClick={handlereloading} size="medium">
          Abrir Detalhes Da Notificação
        </Button>
      </CardActions>
    </Box>
  )
}
