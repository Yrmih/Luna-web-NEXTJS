'use client'

// Third party
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

// Framework
import { usePathname } from 'next/navigation'
import { useState } from 'react'

// Internal
import { MENU_PRINCIPAL_LINKS } from '../../constants'

export function BottoMenu() {
  const pathname = usePathname()
  const [value, setValue] = useState<string>(getValueFromPathname(pathname))

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const NovaSolicitacaoIcon = MENU_PRINCIPAL_LINKS[0].icon
  const MinhasSolicitacoesIcon = MENU_PRINCIPAL_LINKS[1].icon
  const EditarContato = MENU_PRINCIPAL_LINKS[2].icon

  function getValueFromPathname(path: string) {
    const selectedLink = MENU_PRINCIPAL_LINKS.find((link) => link.href === path)
    return selectedLink ? selectedLink.key : MENU_PRINCIPAL_LINKS[1].key // Default to the first link if not found
  }

  return (
    <BottomNavigation
      sx={{ display: { xs: 'flex', sm: 'none' } }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        key={MENU_PRINCIPAL_LINKS[1].key}
        label={MENU_PRINCIPAL_LINKS[1].text}
        value={MENU_PRINCIPAL_LINKS[1].key}
        href={MENU_PRINCIPAL_LINKS[1].href}
        icon={<MinhasSolicitacoesIcon />}
      />
      <BottomNavigationAction
        key={MENU_PRINCIPAL_LINKS[0].key}
        label={MENU_PRINCIPAL_LINKS[0].text}
        value={MENU_PRINCIPAL_LINKS[0].key}
        href={MENU_PRINCIPAL_LINKS[0].href}
        icon={<NovaSolicitacaoIcon />}
      />
      <BottomNavigationAction
        key={MENU_PRINCIPAL_LINKS[2].key}
        label={MENU_PRINCIPAL_LINKS[2].text}
        value={MENU_PRINCIPAL_LINKS[2].key}
        href={MENU_PRINCIPAL_LINKS[2].href}
        icon={<EditarContato />}
      />
    </BottomNavigation>
  )
}
