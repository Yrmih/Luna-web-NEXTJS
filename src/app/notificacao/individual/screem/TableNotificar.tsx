'use client'
import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { CardHeader, IconButton, Typography } from '@mui/material'
import { TableNotificaProps } from '../module/TableNotificarModule'
import EmailIcon from '@mui/icons-material/Email'
import DraftsIcon from '@mui/icons-material/Drafts'

import Link from 'next/link'

interface SubheaderProps {
  subheader1: string
  subheader2: string
}

export function CustomSubheader({ subheader1, subheader2 }: SubheaderProps) {
  return (
    <div>
      <Typography variant="body2" color="textSecondary">
        {subheader1}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {subheader2}
      </Typography>
    </div>
  )
}

export const TableNotificar: React.FC<TableNotificaProps> = ({
  createData,
}) => {
  const [open, setOpen] = React.useState(false)
  const [childModalOpen, setChildModalOpen] = React.useState(false)
  const [iconState, setIconState] = React.useState<Record<string, boolean>>({})

  const toggleIcon = (id: string) => {
    setIconState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChildModalOpen = () => {
    setChildModalOpen(true)
  }

  const handleChildModalClose = () => {
    setChildModalOpen(false)
  }

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          mt: 4,
          marginX: 4,
          paddingX: 4,
        }}
      >
        <CardHeader title="Notificações"></CardHeader>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell align="center">emviado em</TableCell>
              <TableCell align="center">Conteúdo</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {createData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.emviadoem}</TableCell>
                <TableCell align="center">{row.conteudo}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="Notificações"
                    href={`notificacao/individual/${row.id}`}
                    onClick={() => toggleIcon(row.id.toString())}
                    LinkComponent={Link}
                  >
                    {iconState[row.id] ? <DraftsIcon /> : <EmailIcon />}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
