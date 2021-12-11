

import { Paper, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, CircularProgress, Box} from '@mui/material'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'

interface Props {
  
}

const UserTable: FC<Props> = props => {
  
  const [users, setUsers] = useState<any>()
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(e => console.log(e))
  }, [])
  
  if (!users) return <Box height={500} className='flex justify-center items-center'>
    <CircularProgress />
  </Box>
  
  return  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{fontWeight: 'bold'}}>Id</TableCell>
          <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
          <TableCell sx={{fontWeight: 'bold'}}>Username</TableCell>
          <TableCell sx={{fontWeight: 'bold'}}>Email</TableCell>
          <TableCell sx={{fontWeight: 'bold'}}>Website</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((usr: any) => (
          <Link key={usr.id} href={`/users/${usr.username}`} >
            <TableRow
              hover
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': {cursor: 'pointer'},
              }} >
              <TableCell component="th" scope="row" sx={{fontWeight: 'bold'}} > {usr.id} </TableCell>
              <TableCell>{usr.name}</TableCell>
              <TableCell>{usr.username}</TableCell>
              <TableCell>{usr.email}</TableCell>
              <TableCell>{usr.website}</TableCell>
            </TableRow>
          </Link>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
}

export default UserTable
