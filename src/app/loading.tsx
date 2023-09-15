import { Box, Container, Paper, Skeleton } from '@mui/material'

export default function loading() {
  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          borderRadius: 4,
        }}
      >
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton />
          <Skeleton height={118} />
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
          <Skeleton />
          <Skeleton />
          <Skeleton height={118} />
          <Skeleton />
          <Skeleton />
        </Box>
      </Paper>
    </Container>
  )
}
