// Third party
import DashboardIcon from '@mui/icons-material/Dashboard'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Notification } from './Notification'

// Framework
import { ReactNode, useState, MouseEvent } from 'react'
import { MENU_AVANCADO_LINKS } from '@/app/(painel-assistido)/constants'

interface AppBarResponsiveProps {
  children: ReactNode
}

export function AppBarResponsive({ children }: AppBarResponsiveProps) {
  const [notificationAnchorEl, setNotificationAnchorEl] =
    useState<null | HTMLElement>(null)
  const isNotificationsListOpen = Boolean(notificationAnchorEl)
  const handleClickNotification = (event: MouseEvent<HTMLElement>) => {
    notificationAnchorEl
      ? setNotificationAnchorEl(null)
      : setNotificationAnchorEl(event.currentTarget)
  }

  const [anchorEl, setAvatarAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClickAvatar = (event: MouseEvent<HTMLButtonElement>) => {
    open ? setAvatarAnchorEl(null) : setAvatarAnchorEl(event.currentTarget)
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
            onClick={handleClickNotification}
          >
            <Badge badgeContent={6} color="secondary">
              <NotificationsIcon />
              <Notification
                anchorEl={notificationAnchorEl}
                isNotificationsListOpen={isNotificationsListOpen}
              />
            </Badge>
          </IconButton>

          <IconButton
            color="inherit"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickAvatar}
          >
            <Avatar>A</Avatar>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem href={MENU_AVANCADO_LINKS[0].action as string}>
                {MENU_AVANCADO_LINKS[0].text}
              </MenuItem>
              <MenuItem href={MENU_AVANCADO_LINKS[1].action as string}>
                {MENU_AVANCADO_LINKS[1].text}
              </MenuItem>
              <MenuItem onClick={MENU_AVANCADO_LINKS[2].action as () => void}>
                {MENU_AVANCADO_LINKS[2].text}
              </MenuItem>
            </Menu>
          </IconButton>
        </Box>
      </Toolbar>
      {children}
    </AppBar>
  )
}
