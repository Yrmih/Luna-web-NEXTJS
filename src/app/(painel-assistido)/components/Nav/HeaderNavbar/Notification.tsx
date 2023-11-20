import { Box, Menu, MenuItem, Typography, useTheme } from '@mui/material'

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

interface NotificationProps {
  anchorEl: HTMLElement | null
  open: boolean
}

export function Notification({ anchorEl, open }: NotificationProps) {
  const theme = useTheme()

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
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
        <Typography>Ver todas</Typography>
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
              <Typography color={theme.palette.grey[400]}>
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
