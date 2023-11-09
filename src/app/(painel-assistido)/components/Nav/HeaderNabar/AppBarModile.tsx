import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
interface DrawerProps {
  handleDrawerToggle: () => void
}
export function AppBarModile(props: DrawerProps) {
  return (
    <AppBar
      sx={{
        paddingTop: { xs: '10px' }, // Paddin para evitar que o header Mobile tenha seu conteúdo cortado
        display: { xs: 'flex', md: 'none' },
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <IconButton
            size="large"
            aria-label="open drawer"
            aria-haspopup="true"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{
              justifyContent: 'flex-start',
              mr: 2,
              alignItems: 'center',
              display: { md: 'none' },
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.primary.main
                  : theme.palette.primary.main[300],
            }}
          >
            <MenuIcon
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.primary.contrastText
                    : theme.palette.primary.contrastText[100],
              }}
            />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Área do Assistido
          </Typography>
        </Box>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Avatar>A</Avatar>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
