// Third party
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number },
) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', mr: 1, ml: 1 }}>
        <Typography
          sx={{
            justifyContent: 'center',
            position: 'relative',
            mb: '-20px',
            zIndex: 1,
            display: 'flex',
            fontWeight: 'bolder',
            textShadow: '1px 1px 2px black',
            color: 'white',
            fontSize: '0.65rem',
            '@media (min-width:800px)': {
              fontSize: '0.8rem',
            },
            '@media (min-width:950px)': {
              fontSize: '1rem',
              mb: '-25px',
            },
          }}
        >
          PROGRESSO DE ENVIO DE DOCUMENTOS
        </Typography>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="h5"
          fontWeight="bolder"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}
interface BarradeProgressoProps {
  props: {
    valor: number
  }
}

export function BarradeProgresso({ props }: BarradeProgressoProps) {
  return (
    <Box sx={{ display: 'grid', width: '100%', alignItems: 'center' }}>
      <LinearProgressWithLabel
        sx={{ height: '25px', borderRadius: '2vh' }}
        value={props.valor}
      ></LinearProgressWithLabel>
    </Box>
  )
}
