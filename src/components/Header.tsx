// Third party
'use client'
import { useThemeColorMode } from '@/app/context'
import logo from '@/assets/logo.png'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined'
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import Image from 'next/image'

export function Header() {
  const { toggleColorMode } = useThemeColorMode()
  const theme = useTheme()
  return (
    <>
      <AppBar
        sx={{
          height: '65px',
          position: 'sticky', // Garante que o Header permaneça no topo sem impactar a estrutura <header><main><footer>
          top: 0,
        }}
      >
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
          <IconButton onClick={toggleColorMode}>
            {theme.palette.mode === 'light' ? (
              <ContrastOutlinedIcon />
            ) : (
              <Brightness4OutlinedIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
