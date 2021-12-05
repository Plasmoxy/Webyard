import { Avatar, Button, Card, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Copyright from '../src/Copyright'
import Link from '../src/Link'
import MyTable from '../src/MyTable'
import ProTip from '../src/ProTip'


export default function Index() {
  
  const driver = <Grid item xs={4}>
    <Card>
      <Box p={1} sx={{display: 'flex', alignItems: 'center'}}>
        <Box p={1}>
          <Avatar sx={{ width: 100, height: 100 }} src="https://images.immediate.co.uk/production/volatile/sites/23/2014/11/GettyImages-123529247-2a29d6c.jpg?quality=90&resize=768%2C574" />
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom component="p">
            Kokot River
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="p">
            Explodando
          </Typography>  
        </Box>
      </Box>
    </Card>
  </Grid>;
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }} >
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Si zec kokot
        </Typography>
        
        <ProTip />
        
        <Button component={Link} href="/about" variant='contained' color='warning'>
          Druhy page
        </Button>
        
        <MyTable />
        
        <Grid container spacing={3}>
          
          {driver}
          {driver}
          {driver}
          {driver}
          {driver}
          {driver}
        
        </Grid>
        
        <Box mt={3}>
        <Copyright />
          </Box>
      </Box>
    </Container>
  );
}
