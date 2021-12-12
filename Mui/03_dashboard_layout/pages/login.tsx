
import { Button, Card, Typography } from '@mui/material'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { CenteredLayout } from '../components/layout/CenteredLayout'
import { fbAuth, fbAuthGoogleProvider } from '../firebase/firebase'

const LoginPage: NextPage = (props) => {
  
  const devLogin = async () => {
    const res = await signInWithPopup(fbAuth, fbAuthGoogleProvider)
    console.log(res)
  }
  
  useEffect(() => {
    const unregister = onAuthStateChanged(fbAuth, authUser => {
      console.log(authUser)
    })
    return () => unregister()
  }, [])
  
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