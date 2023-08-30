import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function AppBarAreaAssistido() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
        <Toolbar>
            <Grid container flexWrap={'nowrap'} justifyContent={'space-between'} >
                <Grid display={'flex'} item alignItems={'center'} justifyContent={'center'} flexDirection={'row'} flexWrap={'nowrap'}>
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
