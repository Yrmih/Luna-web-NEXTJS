'use server'

import { COOKIE_THEME_COLOR_MODE } from '@/constants/cookies'
import { PaletteMode } from '@mui/material'
import { cookies } from 'next/headers'

export async function setThemeColorModeToCookie(mode: PaletteMode) {
  cookies().set(COOKIE_THEME_COLOR_MODE, mode)
}

export async function getThemeColorModeFromCookie() {
  const requestCookie = cookies().get(COOKIE_THEME_COLOR_MODE)
  return requestCookie?.value as PaletteMode | undefined
}
