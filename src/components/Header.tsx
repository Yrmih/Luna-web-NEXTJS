// Third party
'use client'
import logo from '@/assets/logo.png'
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'

export function Header() {
  return (
    <>
      <AppBar
        sx={{
          height: '65px',
          position: 'sticky', // Garante que o Header permaneça no topo sem impactar a estrutura <header><main><footer>
          top: 0,
        }}
      >
        {/* Sessão de Avatar */}
        <Toolbar>
          <Grid container flexWrap={'nowrap'} justifyContent={'space-between'}>
            <Box display="flex" alignItems="center">
              <Image
                src={logo}
                alt="Logo Defensoria"
                sizes="6rem"
                style={{
                  height: 'auto',
                  width: '100%',
                }}
              />
            </Box>
            <Typography
              alignItems={'center'}
              sx={{ display: { xs: 'none', md: 'flex' } }}
              variant="h6"
              noWrap
            >
              {process.env.NEXT_PUBLIC_DEFENSORIA_NOME}
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}
