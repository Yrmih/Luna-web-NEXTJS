// Third party
import { Box, Container, Skeleton } from '@mui/material'

export function PageLoadingAreaAssistido() {
  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton height={400} />
        <Skeleton />
        <Skeleton height={118} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton height={118} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton height={118} />
        <Skeleton />
        <Skeleton />
      </Box>
    </Container>
  )
}
