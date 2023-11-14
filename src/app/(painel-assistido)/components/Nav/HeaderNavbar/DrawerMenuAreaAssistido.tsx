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
  { key: 1, text: 'Principal', href: '/atendimentos', icon: HomeIcon },
  {
    key: 2,
    text: 'Agendar',
    href: '/solicitacao-agendamento',
    icon: CalendarMonthIcon,
  },
  { key: 3, text: 'Atendimentos', href: '/atendimentos', icon: StarIcon },
  { key: 4, text: 'Processos', href: '/processos', icon: ChecklistIcon },
]

const AVANCADO_LINKS = [
  { key: 1, text: 'Configurações', icon: SettingsIcon },
  { key: 2, text: 'Informações', icon: SupportIcon },
  { key: 3, text: 'Sair', icon: LogoutIcon },
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
        {LINKS.map(({ key, text, href, icon: Icon }) => (
          <ListItem key={key} disablePadding>
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
        {AVANCADO_LINKS.map(({ key, text, icon: Icon }) => (
          <ListItem key={key} disablePadding>
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
