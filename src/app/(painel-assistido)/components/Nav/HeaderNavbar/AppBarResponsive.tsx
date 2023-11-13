// Third party
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

interface DrawerProps {
  handleDrawerToggle: () => void
  isOpen: boolean
}
export function AppBarResponsive({ handleDrawerToggle, isOpen }: DrawerProps) {
  return (
    <AppBar>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <DashboardIcon sx={{ mr: 2, transform: 'translateY(-2px)' }} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              sx={{
                mr: 2,
                alignItems: 'center',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.primary.main
                    : theme.palette.primary.main[300],
              }}
              size="large"
              aria-label="open drawer"
              aria-haspopup="true"
              edge="start"
              onClick={handleDrawerToggle}
            >
              {isOpen ? (
                <ArrowBackIosNewIcon />
              ) : (
                <MenuIcon
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.primary.contrastText
                        : theme.palette.primary.contrastText[100],
                  }}
                />
              )}
            </IconButton>
          </Box>
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
