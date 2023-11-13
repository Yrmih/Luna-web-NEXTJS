// Third party
'use client'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'

export function Header() {
  return (
    <>
      <AppBar
        sx={{
          position: 'sticky', // Garante que o Header permaneça no topo sem impactar a estrutura <header><main><footer>
          top: 0,
          paddingBottom: '13px',
          paddingTop: '13px',
        }}
      >
        {/* Sessão de Avatar */}
        <Toolbar>
          <Grid container flexWrap={'nowrap'} justifyContent={'space-between'}>
            <Box>
              <Image
                src={logo}
                alt="Logo Defensoria"
                sizes="12rem"
                style={{
                  height: 'auto',
                  width: '100%',
                }}
              />
            </Box>
            <Typography
              alignItems={'center'}
              sx={{ display: { xs: 'none', md: 'flex' } }}
              variant="h6"
              noWrap
            >
              {process.env.NEXT_PUBLIC_DEFENSORIA_NOME}
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}
