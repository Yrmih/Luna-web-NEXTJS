'use client'

// Third party
import { Box, Drawer, Theme, useMediaQuery } from '@mui/material'

// Framework
import { useState } from 'react'

// internal
import { AppBarResponsive } from './HeaderNavbar/AppBarResponsive'
import { DrawerMenuAreaAssistido } from './HeaderNavbar/DrawerMenuAreaAssistido'

const drawerWidth = 240

export function AppBarAreaAssistido() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <>
      <AppBarResponsive
        isOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      >
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                top: ['42px', '53px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
          >
            <DrawerMenuAreaAssistido />
          </Drawer>
        </Box>
      </AppBarResponsive>
    </>
  )
}
