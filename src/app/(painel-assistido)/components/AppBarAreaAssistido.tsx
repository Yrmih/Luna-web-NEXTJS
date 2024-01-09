// Third party
import DashboardIcon from '@mui/icons-material/Dashboard'
import {
  AppBar,
  Avatar,
  Badge,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'

export function AppBarAreaAssistido() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
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
            <DashboardIcon sx={{ mr: 2, transform: 'translateY(-2px)' }} />
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
    </AppBar>
  )
}
