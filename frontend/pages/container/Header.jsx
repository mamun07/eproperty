import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'

export default function Header() {
  return (
    <Box position='sticky' py={3} sx={{backgroundColor: 'primary.none'}}>
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Image src='./images/logo.svg' alt="website logo"/>
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
