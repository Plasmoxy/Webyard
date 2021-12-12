
import { Button, Card, Typography } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { CenteredLayout } from '../components/layout/CenteredLayout'

const LoginPage: NextPage = (props) => {
  
  const devLogin = () => {
    
  }
  
  return <CenteredLayout>
    <div className="container max-w-md">
      <Card sx={{p: 2}}>
        <Typography variant='h4'>
          Login
        </Typography>
        <Button onClick={devLogin}>Dev login</Button>
      </Card>
    </div>
  </CenteredLayout>
}

export default LoginPage