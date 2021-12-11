import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Layout } from '../../components/Layout'
import UserTable from '../../components/UserTable'

interface Props {
  
}

const UsersPage: FC<Props> = props => {
  return <Layout>
    <Typography variant='h4'>User management</Typography>
    <Box p={3}>
      <UserTable />
    </Box>
  </Layout>
}

export default UsersPage
