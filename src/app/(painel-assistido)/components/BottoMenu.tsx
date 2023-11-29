'use client'

import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { MENU_PRINCIPAL_LINKS } from '../constants'
import { useState } from 'react'

export function BottoMenu() {
  const [value, setValue] = useState<number>()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const NovaSolicitacaoIcon = MENU_PRINCIPAL_LINKS[0].icon
  const MinhasSolicitacoesIcon = MENU_PRINCIPAL_LINKS[1].icon
  const EditarContato = MENU_PRINCIPAL_LINKS[2].icon
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
