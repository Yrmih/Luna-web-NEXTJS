// Third party
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ChecklistIcon from '@mui/icons-material/Checklist'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import StarIcon from '@mui/icons-material/Star'
import SupportIcon from '@mui/icons-material/Support'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material'
// Framework
import Link from 'next/link'

const LINKS = [
  { text: 'Principal', href: '/atendimentos', icon: HomeIcon },
  {
    text: 'Agendar',
    href: '/solicitacao-agendamento',
    icon: CalendarMonthIcon,
  },
  { text: 'Atendimentos', href: '/atendimentos', icon: StarIcon },
  { text: 'Processos', href: '/processos', icon: ChecklistIcon },
]

const PLACEHOLDER_LINKS = [
  { text: 'Configurações', icon: SettingsIcon },
  { text: 'Informações', icon: SupportIcon },
  { text: 'Sair', icon: LogoutIcon },
]

export function DrawerMenuAreaAssistido() {
  return (
    <Box
      component={Paper}
      sx={{
        flexGrow: 1,
        display: 'block',
        justifyContent: 'flex-start',
      }}
    >
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
    </Box>
  )
}
