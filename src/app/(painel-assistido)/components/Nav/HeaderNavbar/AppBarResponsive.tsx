// Third party
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import DashboardIcon from '@mui/icons-material/Dashboard'
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
import { ReactNode, useState } from 'react'
import { Notification } from './Notification'

interface AppBarResponsiveProps {
  children: ReactNode
  handleDrawerToggle: () => void
  isOpen: boolean
}

export function AppBarResponsive({
  handleDrawerToggle,
  isOpen,
  children,
}: AppBarResponsiveProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isNotificationsListOpen = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget)
  }

  return (
    <AppBar
      sx={{
        position: 'sticky', // Garante que o Header permaneça no topo sem impactar a estrutura <header><main><footer>
        top: 0,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Box>
            <DashboardIcon sx={{ mr: 2, transform: 'translateY(-2px)' }} />
          </Box>
          <Typography variant="h6" noWrap component="div">
            Área do Assistido
          </Typography>
        </Box>

        <Box>
          <IconButton
            color="inherit"
            sx={{ marginRight: 1 }}
            onClick={handleClick}
          >
            <Badge badgeContent={6} color="secondary">
              <NotificationsIcon />
              <Notification
                anchorEl={anchorEl}
                isNotificationsListOpen={isNotificationsListOpen}
              />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Avatar>A</Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      {children}
    </AppBar>
  )
}
