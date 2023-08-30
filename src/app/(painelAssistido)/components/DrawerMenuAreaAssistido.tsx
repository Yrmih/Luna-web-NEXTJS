
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import SupportIcon from '@mui/icons-material/Support';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import React from 'react';

const DRAWER_WIDTH = 240;

const LINKS = [
    { text: 'Principal', href: '/home', icon: HomeIcon },
    { text: 'Agendar', href: '/solicitacaoAgendamento', icon: CalendarMonthIcon },
    { text: 'Atendimentos', href: '/atendimentos', icon: StarIcon },
    { text: 'Processos', href: '/processos', icon: ChecklistIcon },
  ];
  
  const PLACEHOLDER_LINKS = [
    { text: 'Configurações', icon: SettingsIcon },
    { text: 'Informações', icon: SupportIcon },
    { text: 'Sair', icon: LogoutIcon },
  ];

export default function DrawerMenuAreaAssistido({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
        <Drawer
        sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0,
            },
        }}
        variant="permanent"
        anchor="left"
        >
            <Divider />
            <List>
                {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                    <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
                {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Drawer>
        <Box
        component="main"
        sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            ml: `${DRAWER_WIDTH}px`,
            mt: ['48px', '56px', '64px'],
            p: 3,
        }}
        >
        {children}
        </Box>
    </React.Fragment>
  )
}
