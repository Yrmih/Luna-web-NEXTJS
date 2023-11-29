'use client'

import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Paper,
} from '@mui/material'
import { Copyright } from './Copyright'
import { MENU_PRINCIPAL_LINKS } from '@/app/(painel-assistido)/components/Nav/HeaderNavbar/DrawerMenuAreaAssistido'
import { useState } from 'react'

export default function Footer() {
  const [value, setValue] = useState<number>()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const NovaSolicitacaoIcon = MENU_PRINCIPAL_LINKS[0].icon
  const MinhasSolicitacoesIcon = MENU_PRINCIPAL_LINKS[1].icon
  const EditarContato = MENU_PRINCIPAL_LINKS[2].icon

  return (
    <footer>
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
      <Grid
        mt={5}
        component={Paper}
        p={2}
        container
        flexDirection={'row'}
        marginTop={0}
        marginLeft={0}
        alignItems="center"
        textAlign={'center'}
        justifyContent={'center'}
        width={'100%'}
        sx={{
          boxShadow: '0px 0px 1px hsl(0deg 0.79% 35.3% / 54%)', // Adicione o sombreamento
        }}
      >
        <Grid
          sx={{ ml: { md: 'none' } }}
          flexDirection={'column'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          item
          xs={12}
          sm={4}
          md={4}
          lg={12}
          xl={12}
        >
          <Copyright />
        </Grid>
      </Grid>
    </footer>
  )
}
