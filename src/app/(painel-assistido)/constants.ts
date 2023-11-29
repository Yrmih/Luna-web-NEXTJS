import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ChecklistIcon from '@mui/icons-material/Checklist'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import StarIcon from '@mui/icons-material/Star'
import SupportIcon from '@mui/icons-material/Support'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon'
import { signOut } from 'next-auth/react'

export const MENU_PRINCIPAL_LINKS: {
  key: string
  text: string
  href: string
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string }
}[] = [
  {
    key: 'nova-solicitacao',
    text: 'Nova Solicitação',
    href: '/nova-solicitacao',
    icon: CalendarMonthIcon,
  },
  {
    key: 'minhas-solicitacoes',
    text: 'Minhas Solicitações',
    href: '/atendimentos',
    icon: StarIcon,
  },
  {
    key: 'editar-contato',
    text: 'Editar Contato',
    href: '/editar-contato',
    icon: ChecklistIcon,
  },
]

export const MENU_AVANCADO_LINKS: {
  key: number
  text: string
  action: () => void | string
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string }
}[] = [
  {
    key: 1,
    text: 'Configurações',
    action: () => console.log('configurações'),
    icon: SettingsIcon,
  },
  {
    key: 2,
    text: 'Informações',
    action: () => console.log('Informações'),
    icon: SupportIcon,
  },
  { key: 3, text: 'Sair', action: () => signOut(), icon: LogoutIcon },
]
