import { Box, Menu, MenuItem, Typography, useTheme } from '@mui/material'
import NextLink from 'next/link'
import Link from '@mui/material/Link'

const notificationsList = [
  {
    id: 1,
    title: 'Notificação',
    date: '20/11/2023 15:17',
    message:
      'Olá, temos informações importantes sobre sua solicitação.' +
      'Número: 230615001543 Defensoria: Central de Atendimento' +
      'Assunto: Cível / RENEGOCIAÇÃO DE DÍVIDA' +
      'Requerido: SIM' +
      'Mensagem: Teste',
  },
  {
    id: 2,
    title: 'Notificação',
    date: '18/11/2023 10:13',
    message:
      'Olá, temos informações importantes sobre sua solicitação.' +
      'Número: 230615001543 Defensoria: Central de Atendimento' +
      'Assunto: Cível / RENEGOCIAÇÃO DE DÍVIDA' +
      'Requerido: SIM' +
      'Mensagem: Teste',
  },
  {
    id: 3,
    title: 'Notificação',
    date: '18/11/2023 08:09',
    message:
      'Olá, temos informações importantes sobre sua solicitação.' +
      'Número: 230615001543 Defensoria: Central de Atendimento' +
      'Assunto: Cível / RENEGOCIAÇÃO DE DÍVIDA' +
      'Requerido: SIM' +
      'Mensagem: Teste',
  },
  {
    id: 4,
    title: 'Notificação',
    date: '17/11/2023 15:17',
    message:
      'Olá, temos informações importantes sobre sua solicitação.' +
      'Número: 230615001543 Defensoria: Central de Atendimento' +
      'Assunto: Cível / RENEGOCIAÇÃO DE DÍVIDA' +
      'Requerido: SIM' +
      'Mensagem: Teste',
  },
  {
    id: 5,
    title: 'Notificação',
    date: '10/11/2023 15:17',
    message:
      'Olá, temos informações importantes sobre sua solicitação.' +
      'Número: 230615001543 Defensoria: Central de Atendimento' +
      'Assunto: Cível / RENEGOCIAÇÃO DE DÍVIDA' +
      'Requerido: SIM' +
      'Mensagem: Teste',
  },
  {
    id: 6,
    title: 'Notificação',
    date: '03/11/2023 15:17',
    message:
      'Olá, temos informações importantes sobre sua solicitação.' +
      'Número: 230615001543 Defensoria: Central de Atendimento' +
      'Assunto: Cível / RENEGOCIAÇÃO DE DÍVIDA' +
      'Requerido: SIM' +
      'Mensagem: Teste',
  },
]

interface INotificationProps {
  anchorEl: HTMLElement | null
  isNotificationsListOpen: boolean
}

export function Notification({
  anchorEl,
  isNotificationsListOpen: isMenuListOpen,
}: INotificationProps) {
  const theme = useTheme()

  const styledLink = {
    textDecoration: 'none',
    color: theme.palette.grey[600],

    ':hover': {
      color: theme.palette.grey[800],
      transition: '400ms ease-in-out',

      ':after': {
        transform: 'scaleX(1)',
      },
    },

    ':after': {
      display: 'block',
      content: '""',
      borderBottom: `solid 2px ${theme.palette.grey[800]}`,
      transform: 'scaleX(0)',
      transition: 'transform 400ms ease-in-out',
    },
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={isMenuListOpen}
      sx={{
        width: 400,
      }}
    >
      <Box
        sx={{
          padding: 2,
          width: 350,
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: 1,
          borderColor: theme.palette.grey[400],
        }}
      >
        <Typography>Notificações</Typography>
        <Link
          style={{ textDecoration: 'none' }}
          href={'/notificacao'}
          component={NextLink}
          sx={styledLink}
        >
          <Typography>Ver todas</Typography>
        </Link>
      </Box>
      {notificationsList.map((notification) => (
        <MenuItem key={notification.id}>
          <Box
            sx={{
              width: 350,
              borderBottom: 1,
              borderColor: theme.palette.grey[400],
            }}
          >
            <Box
              sx={{
                marginTop: 1,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography fontWeight="bold">{notification.title}</Typography>
              <Typography color={theme.palette.grey[600]}>
                {notification.date}
              </Typography>
            </Box>

            <Box
              sx={{
                paddingY: 1,
                whiteSpace: 'pre-wrap',
              }}
            >
              <Typography sx={{ maxHeight: 150 }} variant="body2">
                {notification.message}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      ))}
    </Menu>
  )
}
