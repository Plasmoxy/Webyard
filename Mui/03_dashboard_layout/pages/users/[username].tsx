import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Layout } from '../../components/Layout'
import UserTable from '../../components/UserTable'

interface Props {
  
}

const UserDetailPage: NextPage<Props> = props => {
  
  const router = useRouter()
  
  if (!router.query.username) return <Layout></Layout>
  
  return <Layout>
    <Button variant='outlined' sx={{mb: 4}} onClick={() => router.back()}>back to users</Button>
    <Typography variant='h4'>Details of user {router.query.username}</Typography>
    <Box p={3}>
      yosh
    </Box>
  </Layout>
}

export default UserDetailPage
