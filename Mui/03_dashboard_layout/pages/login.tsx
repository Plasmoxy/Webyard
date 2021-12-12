
import { Button, Card, Typography } from '@mui/material'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { CenteredLayout } from '../components/layout/CenteredLayout'
import { fbAuth, fbAuthGoogleProvider } from '../firebase/firebase'
import Cookies from 'js-cookie'

const LoginPage: NextPage = (props) => {
  
  const devLogin = async () => {
    const res = await signInWithPopup(fbAuth, fbAuthGoogleProvider)
    const token = await res.user.getIdToken()
    console.log('To kuki: '+ token)
    Cookies.set('dashbord-dev-fbtoken', token)
  }
  
  useEffect(() => {
    const unregister = onAuthStateChanged(fbAuth, authUser => {
      if (!authUser) {
        console.log('Clearing kuki')
        Cookies.set('dashbord-dev-fbtoken', '')
      }
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
        <Button onClick={() => {
          signOut(fbAuth)
        }}>Logout</Button>
      </Card>
    </div>
  </CenteredLayout>
}

export default LoginPage