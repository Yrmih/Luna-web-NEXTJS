'use client'

// Third party
import DashboardIcon from '@mui/icons-material/Dashboard'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  Grid,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { ReactNode, useState } from 'react'
import { AppBarModile } from './HeaderNabar/AppBarModile'
import { DrawerMenuAreaAssistido } from './HeaderNabar/DrawerMenuAreaAssistido'

const drawerWidth = 240
interface DrawerProps {
  children?: ReactNode
}
export function AppBarAreaAssistido(props: DrawerProps) {
  // ============================drawer==============================
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const [mobileOpen, setMobileOpen] = useState(false)

  // ============================drawer==============================
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 2000 }}>
        <Toolbar>
          <Grid container flexWrap={'nowrap'} justifyContent={'space-between'}>
            <Grid
              display={'flex'}
              item
              xs={12}
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
            <Grid item xs={12}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Avatar>A</Avatar>
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          ml: { xs: 'auto', md: `${drawerWidth}px` },
          mt: ['58px', '65px', '42px'],
          p: 0,
        }}
      >
        {props.children}
      </Box>
    </>
  )
}
