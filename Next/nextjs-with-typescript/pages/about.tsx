import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Copyright from '../src/Copyright'
import Link from '../src/Link'
import ProTip from '../src/ProTip'


export default function About() {
  
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          TypeSckript !!!!!!
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    
      
    </Container>
  );
}
