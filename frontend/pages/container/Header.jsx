import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Box sx={{backgroundColor: 'primary.none'}}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography>Logo</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>Menu</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Contact</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
