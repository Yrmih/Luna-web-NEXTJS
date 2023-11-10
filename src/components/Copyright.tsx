// Third party
import { Typography, useTheme } from '@mui/material'

// Framework
import Link from 'next/link'

export function Copyright() {
  const theme = useTheme();
  return (
    <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <Link href="#" style={{
        textDecoration: 'none',
        color: theme.palette.secondary.dark, fontWeight: 400
      }}>
        Defensoria Publica do Estado do Pará
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
