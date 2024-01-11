// Third party
import { MENU_PRINCIPAL_LINKS } from '@/features/painel-assistido/constants'
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

// Internal

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
        {MENU_PRINCIPAL_LINKS.map(({ key, text, href, icon: Icon }) => (
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
    </Box>
  )
}
export { MENU_PRINCIPAL_LINKS }
