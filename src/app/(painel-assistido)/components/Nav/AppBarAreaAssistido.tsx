// Third party
'use client'
import DashboardIcon from '@mui/icons-material/Dashboard'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { ReactNode } from 'react'
import { DrawerMenuAreaAssistido } from './HeaderNabar/DrawerMenuAreaAssistido'
import { AppBarModile } from './HeaderNabar/AppBarModile'

const drawerWidth = 240
interface DrawerProps {
  children?: ReactNode
}
export function AppBarAreaAssistido(props: DrawerProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  // ============================drawer==============================
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  const container =
    typeof window !== 'undefined' ? window.document.body : undefined
  // ============================drawer==============================

  return (
    <>
      <AppBar
        sx={{
          position: 'sticky', // Garante que o Header permaneça no topo sem impactar a estrutura <header><main><footer>
          top: 0,
        }}
      >
        {/* Sessão de Avatar */}
        <Toolbar>
          <Grid container flexWrap={'nowrap'} justifyContent={'space-between'}>
            <Grid
              display={'flex'}
              item
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'row'}
              flexWrap={'nowrap'}
            >
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <DashboardIcon sx={{ mr: 2, transform: 'translateY(-2px)' }} />
              </Box>
              <Box sx={{ display: { xs: 'flex' } }}>
                <AppBarModile handleDrawerToggle={handleDrawerToggle} />
              </Box>
              <Typography variant="h6" noWrap component="div">
                Área do Assistido
              </Typography>
            </Grid>
            <Grid item>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Avatar>A</Avatar>
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        {/* Sidebar responsiva para PC */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                top: ['28px', '26px', '65px'],
                height: 'auto',
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
            container={container}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerMenuAreaAssistido />
          </Drawer>
        </Box>
        {/* Sidebar responsiva para celular */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                top: ['52px', '63px', '74px'],
                height: 'auto',
                bottom: 0,
              },
            }}
          >
            <DrawerMenuAreaAssistido />
          </Drawer>
        </Box>
      </AppBar>
    </>
  )
}
