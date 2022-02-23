import React, { useEffect,useState } from 'react'
import { Container, AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

export default function Header() {
  const [bgcolor, setBGcolor] = useState(0);


  return (
    <Box>
      <AppBar position='fixed' sx={{backgroundColor: 'primary.none', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> News </Typography>
            <Button color="inherit"> Login </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
