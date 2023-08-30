import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Equipe DPE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
