import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Head from 'next/head'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  
}

export const Layout: React.FC<Props> = (props) => {
  return <div className="container">
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    
    <main>{props.children}</main>
  </div>
}
