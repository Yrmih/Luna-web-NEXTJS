'use client'

// Third party
import { Box, Drawer, Theme, useMediaQuery } from '@mui/material'

// Framework
import { ReactNode, useState } from 'react'

// internal
import { AppBarResponsive } from './HeaderNavbar/AppBarResponsive'
import { DrawerMenuAreaAssistido } from './HeaderNavbar/DrawerMenuAreaAssistido'

const drawerWidth = 240

interface DrawerProps {
  children?: ReactNode
}

export function AppBarAreaAssistido({ children }: DrawerProps) {
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
      />
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          // ModalProps={{
          //   keepMounted: true, // Better open performance on mobile.
          // }}
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
        {children}
      </Box>
    </>
  )
}
