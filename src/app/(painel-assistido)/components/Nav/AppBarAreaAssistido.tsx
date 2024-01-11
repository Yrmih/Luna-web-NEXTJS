'use client'

// Third party
import { Box, Drawer } from '@mui/material'

// internal
import { AppBarResponsive } from './HeaderNavbar/AppBarResponsive'
import { DrawerMenuAreaAssistido } from './HeaderNavbar/DrawerMenuAreaAssistido'

const drawerWidth = 240

export function AppBarAreaAssistido() {
  return (
    <>
      <AppBarResponsive>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
          <Drawer
            variant="permanent"
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                top: { sm: '64px' },
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
